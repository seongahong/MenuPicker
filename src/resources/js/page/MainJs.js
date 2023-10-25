export default {
  name: "Main",
  data: () => ({
    newMenu: "",
    menuGroup: [],
    isShow: false,
    result: "",
  }),
  methods: {
    // menuGroup에 메뉴추가
    addItem() {
      this.menuGroup.push({
        name: this.newMenu,
      });
      this.newMenu = "";
    },
    // 메뉴등록 이벤트
    fnRegister() {
      if (this.newMenu.trim() === "") {
        alert("메뉴를 입력해주세요.");
      } else {
        this.addItem();
      }
    },
    // 기본값세팅 이벤트
    fnSet() {
      this.menuGroup = [
        {
          name: "담소",
        },
        {
          name: "닭갈비",
        },
        {
          name: "마라탕",
        },
        {
          name: "육전",
        },
        {
          name: "2층",
        },
        {
          name: "칼국수",
        },
        {
          name: "서브웨이",
        },
      ];
    },
    // 삭제 이벤트
    fnRemove(v) {
      this.menuGroup.splice(v, 1);
    },
    // 초기화 이벤트
    fnReset() {
      if (confirm("초기화 하시겠습니까?")) {
        this.isShow = false;
        this.menuGroup = [];
        this.result = "";
        this.newMenu = "";
      } else {
        return;
      }
    },
    // 랜덤 이벤트
    fnRandom() {
      if (this.menuGroup.length > 1) {
        const randomIdx = Math.floor(Math.random() * this.menuGroup.length);
        this.result = `${this.menuGroup[randomIdx].name} 냠냠 쩝쩝`;
        this.isShow = true;
      } else {
        alert("메뉴를 2개 이상 등록해주세요.");
      }
    },
  },
};
