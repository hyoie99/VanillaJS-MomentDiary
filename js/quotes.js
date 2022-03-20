const quotes = [
  {
    quote:
      "착한 일을 하는 사람에게는 하늘이 복을 주시고, <br> 악한 일을 하는 사람에게는 하늘이 재앙을 주느니라.",
    author: "공자",
  },
  {
    quote: "확실한 일을 실행할 힘은 누구나 가지고 있다.",
    author: "괴테",
  },
  {
    quote: "끝을 맺기를 처음과 같이 하면 실패가 없다.",
    author: "노자",
  },
  {
    quote: "버들가지는 약하나 다른 재목을 묶는다.",
    author: "하버트",
  },
  {
    quote: "절제는 모든 미덕의 진주 고리를 이어주는 비단의 실이다.",
    author: "홀",
  },
  {
    quote:
      "어쨌든 노력을 계속 하시오. <br> 그렇게 하는 가운데 언젠가는 반드시 자신과 용기가 솟아나게 될 것입니다.",
    author: "다란벨",
  },
  {
    quote:
      "추위에 떤 자일수록 태양의 따뜻함을 느낀다. <br> 인생의 고뇌를 맛 본 자일수록 생명의 존귀함을 느낀다.",
    author: "호이토 맨",
  },
  {
    quote: "가시에 찔리지 않고서는 장미꽃을 모을 수 없다.",
    author: "필페이",
  },
  {
    quote: "사랑받는 것이 행복이 아니라 사랑하는 것이 행복이다.",
    author: "헤르만 헤세",
  },
  {
    quote: "중용도 너무 지나쳐서는 안 된다.",
    author: "아서 캐슬러",
  },
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerHTML = todaysQuote.quote;
author.innerHTML = todaysQuote.author;
