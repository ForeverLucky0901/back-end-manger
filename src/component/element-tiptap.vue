<template>
  <div>
    <el-tiptap
      v-model="content"
      :extensions="extensions"
      placeholder="请输入内容 …"
      width="80%"
      height="600"
      out="html"
      @change="handleContent"
    ></el-tiptap>
    <button @click="handleContent">确定</button>
  </div>
</template>

<script>
import {
  // 需要的 extensions
  Doc,
  Text,
  Paragraph,
  Heading,
  Bold,
  Underline,
  Italic,
  Strike,
  ListItem,
  BulletList,
  OrderedList,
  Link,
  CodeBlock,
  Blockquote,
  TodoItem,
  TodoList,
  TextAlign,
  FontSize,
  FontType,
  SelectAll,
  Fullscreen,
  Preview,
  TextHighlight,
  TextColor,
  FormatClear,
  Table,
  TableHeader,
  TableCell,
  TableRow,
  History,
  TrailingNode,
  HardBreak,
  HorizontalRule,
  LineHeight,
  Indent,
} from "element-tiptap";

export default {
  name: "ElementTiptap",
  components: {},
  props: {},
  data() {
    return {
      extensions: [
        new Doc(),
        new Text(),
        new Paragraph(),
        new Heading({ level: 6 }),
        new Bold({ bubble: true }), // 在气泡菜单中渲染菜单按钮
        new Underline({ bubble: true, menubar: false }), // 在气泡菜单而不在菜单栏中渲染菜单按钮
        new Italic(),
        new Strike(),
        new ListItem(),
        new BulletList(),
        new OrderedList(),
        new Link(),
        new CodeBlock(),
        new Blockquote(),
        new TodoItem(),
        new TodoList(),
        new TextAlign(),
        new FontSize(),
        new FontType(),
        new SelectAll(),
        new Fullscreen(),
        new Preview(),
        new TextHighlight(),
        new TextColor(),
        new FormatClear(),
        new Table({ resizable: true }),
        new TableHeader(),
        new TableCell(),
        new TableRow(),
        new History(),
        new TrailingNode(),
        new HardBreak(),
        new HorizontalRule(),
        new LineHeight(),
        new Indent(),
      ],
      content: "",
    };
  },
  methods: {
    handleContent() {
      console.log(this.content, "00000000000000000000000000");
      console.log(this.$refs.tiptap.content, "11111111111111111");
      // return this.content;
    },
  },
};
</script>

<style scoped lang="less"></style>
