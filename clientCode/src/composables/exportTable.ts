import streamSaver from 'streamsaver';
import { ElMessage } from 'element-plus';
import { useApi } from './useApi';
import { useI18n } from 'vue-i18n';

export const exportTable = () => {
  const { postMicro, getInfo } = useApi();
  const { t } = useI18n();

  // 定义选项、列和写入器的类型
  type Options = any; // 根据实际情况定义具体类型
  type Column = {
    label: string;
    prop: string;
    formatter?: (item: any, column: Column, value: any) => any;
  };
  type Writer = any; // 需要根据实际使用的库定义具体类型

  const exportMicroCSV = async (options: Options, columns: Column[], writer: Writer, filename: string) => {
    const MAX_BUFFER_SIZE = 10 * 1024 * 1024;
    const encoder = new TextEncoder();
    const stream = streamSaver.createWriteStream(filename);
    writer = stream.getWriter(); // 总是创建新writer
    let buffer = new Uint8Array(512 * 1024);
    let bufferOffset = 0;
    const writeToBuffer = async (data: Uint8Array) => {
      if (bufferOffset + data.length > buffer.length) {
        await writer.write(buffer.subarray(0, bufferOffset));
        bufferOffset = 0;
        if (data.length > buffer.length) {
          buffer = new Uint8Array(Math.min(data.length * 2, MAX_BUFFER_SIZE));
        }
      }
      buffer.set(data, bufferOffset);
      bufferOffset += data.length;
    };
    await writer.write(encoder.encode('\ufeff'));
    const headers = columns.map(c => t(c.label));
    await writeToBuffer(encoder.encode(headers.join(',') + '\r\n'));
    const exportData = await postMicro(options);
    for (const item of exportData.data) {
      const row = formatCSVRow(item, columns); // 保证换行符统一
      await writeToBuffer(encoder.encode(row));
    }
    if (bufferOffset > 0) {
      await writer.write(buffer.subarray(0, bufferOffset));
    }
    await writer.close();
    ElMessage.success(`${t("导出成功")}，${t("共处理")}${exportData.data.length}${t("条数据")}`);
  }

  const exportGetCSV = async (cmd: string, options: Options, columns: Column[], writer: Writer, filename: string) => {
    const MAX_BUFFER_SIZE = 10 * 1024 * 1024;
    const encoder = new TextEncoder();
    const stream = streamSaver.createWriteStream(filename);
    writer = stream.getWriter(); // 总是创建新writer
    let buffer = new Uint8Array(512 * 1024);
    let bufferOffset = 0;
    const writeToBuffer = async (data: Uint8Array) => {
      if (bufferOffset + data.length > buffer.length) {
        await writer.write(buffer.subarray(0, bufferOffset));
        bufferOffset = 0;
        if (data.length > buffer.length) {
          buffer = new Uint8Array(Math.min(data.length * 2, MAX_BUFFER_SIZE));
        }
      }
      buffer.set(data, bufferOffset);
      bufferOffset += data.length;
    };
    await writer.write(encoder.encode('\ufeff'));
    const headers = columns.map(c => t(c.label));
    await writeToBuffer(encoder.encode(headers.join(',') + '\r\n'));
    const exportData = await getInfo(cmd, options);
    for (const item of exportData.data) {
      const row = formatCSVRow(item, columns); // 保证换行符统一
      await writeToBuffer(encoder.encode(row));
    }
    if (bufferOffset > 0) {
      await writer.write(buffer.subarray(0, bufferOffset));
    }
    await writer.close();
    ElMessage.success(`${t("导出成功")}，${t("共处理")}${exportData.data.length}${t("条数据")}`);
  }

  function formatCSVRow(item: any, columns: Column[]) {
    const rowParts: string[] = [];
    for (const col of columns) {
      let val = item[col.prop];
      if (col.formatter) {
        val = col.formatter(item, col, val);
      }
      const safeVal = val != null ? String(val) : '';
      rowParts.push(`"${safeVal.replace(/"/g, '""')}"`);
    }
    return rowParts.join(',') + '\n';
  }

  return { exportMicroCSV, exportGetCSV };
};