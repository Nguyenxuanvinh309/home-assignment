export const REG_EXP = {
  PASSWORD: /^(?=.*[A-Za-z])(?=.*\d)(?!.*\s)[A-Za-z\d\W]{8,}$/,
  PHONE: /^[0-9]{10,11}$/,
  EMAIL:
    /^[a-z0-9*+_-]+(?:\.[a-z0-9*+_-]+)*@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(((?![-])[a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/i,
  ALPHABET_JP_REGX:
    /^[A-Za-z\x20\u3000\u3040-\u309f\u30a0-\u30ff\uff65-\uff9f\u4e00-\u9faf\u3400-\u4dbf\u3005\ufa11]+$/,
  WHITESPACE: /\s/,
  NON_WHITESPACE: /^\S*$/,
  KATAKANA: /^[\x20\u3000\u30a0-\u30ff\uff65-\uff9f]+$/,
  ZIP_CODE: /[0-9]{7}/,
};