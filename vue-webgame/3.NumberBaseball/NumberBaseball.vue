<template>
  <div>
    <h1>{{ result }}</h1>
    <form @submit.prevent="onSubmitForm">
      <input ref="answer" maxlength="4" v-model="value">
      <button type="submit">입력</button>
    </form>
    <div>시도: {{ tries.length }}</div>
    <ul>
      <li v-for="t in tries">
        <div>{{ t.try }}</div>
        <div>{{ t.result }}</div>
      </li>
    </ul>
  </div>
</template>

<script>
const getNumbers = () => {
  const candidates = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  const array = [];
  for (let i = 0; i < 4; i += 1) {
    const chosen = candidates.splice(Math.floor(Math.random() * (9 - i)), 1)[0];
    array.push(chosen);
  }
  return array;
}
export default {
  data() {
    return {
      answer: getNumbers(),
      tries: [],
      value: '',
      result: ''
    }
  },
  methods: {
    onSubmitForm() {
      // 정답을 맞춘 경우
      if (this.value === this.answer.join('')) {
        this.tries.push({
          try: this.value,
          result: '홈런'
        });
        this.result = '홈런';
        alert("게임을 다시 실행합니다.");
        this.value = '';
        this.tries = [];
      } else {
        if (this.tries.length >= 9) {
          this.result = `10번 초과로 실패, 정답은 ${this.answer.join('',)}이었습니다.`;
          alert("게임을 다시 시작합니다.");
          this.value = '';
          this.answer = getNumbers();
          this.tries = [];
          this.$refs.answer.focus();
        }
        let strike = 0;
        let ball = 0;
        const answerArray = this.value.split('').map(v => parseInt(v));
        for (let i = 0; i < 4; i++) {
          // 자리수만 정답
          if (answerArray[i] === this.answer[i]) {
            strike++;
            //숫자만 정답
          } else if (this.answer.includes(answerArray[i])) {
            ball++;
          }
        }
        this.tries.push({
          try: this.value,
          result: `${strike} 스트라이크, ${ball} 볼 입니다.`,
        })
        this.value = '';
        this.$refs.answer.focus();
      }
    }
  }
}
</script>

<style></style>