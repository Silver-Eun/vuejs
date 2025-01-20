<template>
  <div class="container">
    <div class="mb-3">
      <label for="title" class="form-label">제목</label>
      <input type="text" v-model="data.board.title" name="title" class="form-control" id="title" placeholder="입력해주세요">
    </div>
    <div class="mb-3">
      <label for="contents" class="form-label">내용</label>
      <textarea name="contents" v-model="data.board.contents" class="form-control" id="contens" rows="3"></textarea>
    </div>
    <div class="mb-3">
      <label for="uploadFile" class="form-label">파일첨부</label>
      <input name="uploadFile" v-on:change="changeFile" class="form-control" type="file" id="uploadFile">
    </div>
    <div class="d-grid gap-2 d-md-flex justify-content-md-end">
      <button class="btn btn-primary me-md-2" type="button">취소</button>
      <button class="btn btn-primary" type="button" v-on:click="save">저장</button>
    </div>
  </div>
</template>

<script>
import { onMounted, reactive } from 'vue'

export default {
  name: 'BoardForm',
  components: {
  },
  setup() {
    const data = reactive({
      board: {
        boardType: 'NOTICE',
        title: null,
        contents: null,
        uploadFile: null
      }
    });
    // API 호출
    const save = () => {
      var formData = new FormData();
      formData.append('boardType', data.board.boardType);
      if (data.board.title != null) {
        formData.append('title', data.board.title);
      }
      if (data.board.contents != null) {
        formData.append('contents', data.board.contents);
      }
      if (data.board.uploadFile != null) {
        formData.append('uploadFile', data.board.uploadFile);
      }
      fetch('http://localhost:9000/board/save', {
        method: 'PUT',
        body: formData
      })
        .then(response => response.json())
        .then(response => {
          console.log(response);
        });
    };
    const changeFile = (e) => {
      data.board.uploadFile = e.target.files[0];
      console.log(data.board.uploadFile);
    };
    onMounted(() => {
      
    });
    return {
      data: data,
      save: save,
      changeFile : changeFile
    }
  }
}
</script>

<style>
@import 'https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css';
</style>