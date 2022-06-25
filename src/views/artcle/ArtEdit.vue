<template>
  <div class="container">
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>文章管理</el-breadcrumb-item>
      <el-breadcrumb-item>{{ title }}文章</el-breadcrumb-item>
    </el-breadcrumb>
    <div class="menuname">{{ title }}文章</div>

    <!-- 添加或者编辑页面 -->

    <el-form ref="artForm" :model="artForm" class="artBox">
      <el-form-item label="标题">
        <el-input size="small" v-model="artForm.title" placeholder="请输入文章标题"></el-input>
      </el-form-item>
      <el-form-item label="作者">
        <el-input size="small" v-model="artForm.author" placeholder="请输入创作人"></el-input>
      </el-form-item>
      <el-form-item label="分类">
        <el-input  size="small" v-model="artForm.classCate" placeholder="请选择文章分类"></el-input>
      </el-form-item>
      <el-form-item label="简介">
        <el-input size="small" v-model="artForm.introduce" placeholder="请输入文章简介" ></el-input>
      </el-form-item>
      <el-form-item label="标签">
        <el-input size="small" v-model="artForm.tag" placeholder="请输入标签"></el-input>
      </el-form-item>
      <el-form-item label="链接">
        <el-input size="small"  v-model="artForm.url" placeholder="请输入类目名称"></el-input>
      </el-form-item>
      <!-- 上传图片 -->
      <el-form-item label="上传">
        <el-upload action="#" list-type="picture-card" :auto-upload="false" :limit=5 :multiple="true">
          <i slot="default" class="el-icon-plus"></i>
          <div slot="file" slot-scope="{ file }">
            <img class="el-upload-list__item-thumbnail" :src="file.url" alt="" />
            <span class="el-upload-list__item-actions">
              <span class="el-upload-list__item-preview"  @click="handlePictureCardPreview(file)">
                <i class="el-icon-zoom-in"></i>
              </span>
              <span v-if="!disabled" class="el-upload-list__item-delete" @click="handleDownload(file)">
                <i class="el-icon-download"></i>
              </span>
              <span v-if="!disabled" class="el-upload-list__item-delete" @click="handleRemove(file)">
                <i class="el-icon-delete"></i>
              </span>
            </span>
          </div>
        </el-upload>
        <el-dialog :visible.sync="dialogVisible">
          <img width="100%" :src="dialogImageUrl" alt="" />
        </el-dialog>
      </el-form-item>
      <!-- 富文本 -->
      <el-form-item label="内容"  prop="content">
        <el-tiptap
          v-model="artForm.content"
          :extensions="extensions"
          placeholder="请输入内容 …"
          width="80%"
          height="600"
          out="html"
        ></el-tiptap>
      </el-form-item>
      <!--富文本  -->
    </el-form>
    <div slot="footer" class="dialog-footer">
      <el-button size="small" @click="cancel()">取 消</el-button>
      <el-button type="primary" border size="small" class="title" @click="submitForm('artForm')">保 存</el-button>
    </div>
  </div>
</template>

<script>
// 需要的 extensions
import { Doc, Text, Paragraph, Heading, Bold, Underline, Italic,Strike, ListItem, BulletList, OrderedList,
 Link, CodeBlock, Blockquote, TodoItem, TodoList, TextAlign, FontSize, FontType, SelectAll, Fullscreen, 
 Preview,TextHighlight, TextColor, FormatClear, Image,TableHeader, TableCell, TableRow, History, TrailingNode, HardBreak, HorizontalRule, LineHeight, Indent ,Table } from "element-tiptap";
import { nanoid } from "nanoid";
export default {
  name: "ArtEdit",
  data() {
    return {
      title: this.$route.params.title || "添加",
      // 关于上传图片的
      dialogImageUrl: "",
      dialogVisible: false,
      disabled: false,
      // 表单实时的数据
      artForm: {
        title: "",
        author: "",
        createTime: "",
        classCate: "",
        readNum: "",
        likeNum: "",
        keepNum: "",
        cover: "",
        url: "",
        content: "",
        introduce: "",
        tag: "",
      },
      // 临时编辑的数据
      temEditData:{},
      // 复制的总数据
      allArtData: [],
      content: "",
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
        new Image(),
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
      formRules: {
        title: [
          { required: true, message: "请输入文章标题", trigger: "blur" },
          { min: 5,  max: 30,  message: "长度在 5 到 30 个字符", trigger: "blur" },
        ],
        author: { required: true, message: "请输入文章作者", trigger: "blur" },
        classCate: { required: true, message: "请输入文章分类", trigger: "blur" },
        introduce: { required: true, message: "请输入文章简介", trigger: "blur" },
        tag: { required: true, message: "请输入文章标签", trigger: "blur" },
        url: { required: true, message: "请输入文章链接", trigger: "blur" },
        content: [
          { required: true, message: "请输入文章内容", trigger: "blur" },
          {
            validator(rule, value, callback) {
              console.log("content validator");
              if (value === "<p></p>") {
                // 验证失败
                callback(new Error("请输入文章内容"));
              } else {
                // 验证通过
                callback();
              }
            },
          }
        ],
      },
    };
  },
  created() {
      if(this.$route.params.title === "添加") {
        this.title = "title";
        this.artForm = {}
      }else if(this.$route.params.title === "编辑") {
        console.log( this.$store.state.artEditData);
        // 复制临时编辑数据
        this.temEditData = this.$store.state.artEditData;
        // 复制临时总数据
        this.allArtData = this.$store.state.artData;
        this.artForm = this.temEditData
        // 图片回显不会，暂时搁置
        // this.dialogImageUrl = this.$store.state.artEditData.cover
      }
  },
  methods: {
    submitForm(artForm) {
      this.$refs[artForm].validate(valid => {
        this.artForm.id = nanoid(5);
        this.artForm.createTime = new Date().toLocaleString();
        this.artForm.cover = this.dialogImageUrl
        if(this.title === "添加") {
          this.$store.commit('setArtData',this.artForm)
        } else if (this.title === "编辑") {
          let index = this.allArtData.findIndex( item => item.id === this.temEditData.id)
          this.allArtData.splice(index, 1 ,this.artForm)
          this.$store.commit("editOneArtData", this.allArtData)
        }
        this.$message({
          type: "Success",
          message: this.title + "成功"
        })
      })
    },
    cancel() {
      this.artForm = {}
    },
    // 以下三个是关于图片上传的函数
    handleRemove(file) {
      console.log(file);
    },
    handlePictureCardPreview(file) {
      this.dialogImageUrl = file.url;
      this.dialogVisible = true;
      console.log( this.dialogImageUrl);
    },
    handleDownload(file) {
      console.log(file);      
    },
  },
};
</script>

<style scoped>
.artBox {
  width: 80%;
  margin: 0 auto;
}
</style>
