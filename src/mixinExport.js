export const mixinExport = {
    data: () => ({
        /**
         * ローカルにカスタムディレクティブを使う場合は、「this」が使えない
         */
        title     : "Welcome to Tokyo",
        subTitle  : "Tokyo is a great city",
      }),
      created() {
        console.log("created in Mixin");
      },
};
