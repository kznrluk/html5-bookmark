export default class GetBookmark {
    static async getList() {
        const response = await fetch('/getList').then(r => r.json());
        console.log(response);
        return response;
    }
}
