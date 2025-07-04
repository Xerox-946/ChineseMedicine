<template>
    <div>
      <QuillEditor ref="myQuillEditor"
        theme="snow"
        v-model:content="content"
        :options="data.editorOption"
        contentType="html"
        @update:content="setValue()"
        @ready="onEditorReady($event)"
      />
    </div>
</template>

<script setup>
import { QuillEditor } from '@vueup/vue-quill'
import '@vueup/vue-quill/dist/vue-quill.core.css'
import '@vueup/vue-quill/dist/vue-quill.snow.css'
import '@vueup/vue-quill/dist/vue-quill.bubble.css'
import { reactive, onMounted, ref, toRaw, watch } from 'vue'
import { useI18n } from "vue-i18n";

const { t } = useI18n();
const props = defineProps(['value']);
const emit = defineEmits(['updateValue']);
const content = ref('');
const myQuillEditor = ref();
const titleConfig = [
  { Choice: '.ql-insertMetric', title: '跳转配置' },
  { Choice: '.ql-bold', title: '加粗' },
  { Choice: '.ql-italic', title: '斜体' },
  { Choice: '.ql-underline', title: '下划线' },
  { Choice: '.ql-header', title: '段落格式' },
  { Choice: '.ql-strike', title: '删除线' },
  { Choice: '.ql-blockquote', title: '块引用' },
  { Choice: '.ql-code', title: '插入代码' },
  { Choice: '.ql-code-block', title: '插入代码段' },
  { Choice: '.ql-font', title: '字体' },
  { Choice: '.ql-size', title: '字体大小' },
  { Choice: '.ql-list[value="ordered"]', title: '编号列表' },
  { Choice: '.ql-list[value="bullet"]', title: '项目列表' },
  { Choice: '.ql-direction', title: '文本方向' },
  { Choice: '.ql-header[value="1"]', title: 'h1' },
  { Choice: '.ql-header[value="2"]', title: 'h2' },
  { Choice: '.ql-align', title: '对齐方式' },
  { Choice: '.ql-color', title: '字体颜色' },
  { Choice: '.ql-background', title: '背景颜色' },
  { Choice: '.ql-image', title: '图像' },
  { Choice: '.ql-video', title: '视频' },
  { Choice: '.ql-link', title: '添加链接' },
  { Choice: '.ql-formula', title: '插入公式' },
  { Choice: '.ql-clean', title: '清除字体格式' },
  { Choice: '.ql-script[value="sub"]', title: '下标' },
  { Choice: '.ql-script[value="super"]', title: '上标' },
  { Choice: '.ql-indent[value="-1"]', title: '向左缩进' },
  { Choice: '.ql-indent[value="+1"]', title: '向右缩进' },
  { Choice: '.ql-header .ql-picker-label', title: '标题大小' },
  { Choice: '.ql-header .ql-picker-item[data-value="1"]', title: '标题一' },
  { Choice: '.ql-header .ql-picker-item[data-value="2"]', title: '标题二' },
  { Choice: '.ql-header .ql-picker-item[data-value="3"]', title: '标题三' },
  { Choice: '.ql-header .ql-picker-item[data-value="4"]', title: '标题四' },
  { Choice: '.ql-header .ql-picker-item[data-value="5"]', title: '标题五' },
  { Choice: '.ql-header .ql-picker-item[data-value="6"]', title: '标题六' },
  { Choice: '.ql-header .ql-picker-item:last-child', title: '标准' },
  { Choice: '.ql-size .ql-picker-item[data-value="small"]', title: '小号' },
  { Choice: '.ql-size .ql-picker-item[data-value="large"]', title: '大号' },
  { Choice: '.ql-size .ql-picker-item[data-value="huge"]', title: '超大号' },
  { Choice: '.ql-size .ql-picker-item:nth-child(2)', title: '标准' },
  { Choice: '.ql-align .ql-picker-item:first-child', title: '居左对齐' },
  { Choice: '.ql-align .ql-picker-item[data-value="center"]', title: '居中对齐' },
  { Choice: '.ql-align .ql-picker-item[data-value="right"]', title: '居右对齐' },
  { Choice: '.ql-align .ql-picker-item[data-value="justify"]', title: '两端对齐' }
];
const data = reactive({
  content: '',
  editorOption:{
    modules: {
      toolbar: [
        ['bold', 'italic', 'underline', 'strike'], // 加粗 斜体 下划线 删除线
        ['blockquote', 'code-block'], // 引用  代码块
        [{ header: 1 }, { header: 2 }], // 1、2 级标题
        [{ list: 'ordered' }, { list: 'bullet' }], // 有序、无序列表
        [{ script: 'sub' }, { script: 'super' }], // 上标/下标
        [{ indent: '-1' }, { indent: '+1' }], // 缩进
        [{ direction: 'rtl' }], // 文本方向
        [{ size: ['12', '14', '16', '18', '20', '22', '24', '28', '32', '36'] }], // 字体大小
        [{ header: [1, 2, 3, 4, 5, 6] }], // 标题
        [{ color: [] }, { background: [] }], // 字体颜色、字体背景颜色
        // [{ font: ['songti'] }], // 字体种类
        [{ align: [] }], // 对齐方式
        ['clean'], // 清除文本格式
        ['image', 'video'] // 链接、图片、视频
        // ['link', 'image'] // 链接、图片
      ]
    },
    placeholder: t('请输入正文'),
  }
})
// 抛出更改内容，此处避免出错直接使用文档提供的getHTML方法
const setValue = () => {
    const text = toRaw(myQuillEditor.value).getHTML();
    emit('updateValue', text);
}

//抛出清除内容的方法供外部使用
const updateValue = (content) => {
  toRaw(myQuillEditor.value).setHTML(content);
  setValue();
}

// 初始化编辑器
onMounted(() => {
    const quill = toRaw(myQuillEditor.value).getQuill();
    toRaw(myQuillEditor.value).setHTML(props.value);
});

const onEditorReady = (quill) => {
  for (let item of titleConfig) {
    let tip = document.querySelector('.ql-formats ' + item.Choice)
    if (!tip) continue
    tip.setAttribute('title', t(item.title))
  }
}
defineExpose({
  updateValue
});
</script>
<style scoped lang="scss">
// 调整样式
:deep(.ql-editor) {
  min-height: 300px;
}
:deep(.ql-formats) {
  height: 21px;
  line-height: 21px;
}
</style>
  
  