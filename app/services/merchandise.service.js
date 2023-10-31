const { ObjectId } = require("mongodb");

class MerchandiseService {
    constructor(client){
        try {
        this.Merchandise = client.db().collection("merchandises");
        }
        catch (error){
        console.log(error)
        }
    }

    extractMerchandiseData(payload) {
        const merchandise = {
            name: payload.name,
            mota: payload.mota,
            gia: payload.gia,
            soluong: payload.soluong,
            ghichu: payload.ghichu,
        };

        Object.keys(merchandise).forEach(
            (key) => merchandise[key] === undefined && delete merchandise[key]
        );
        return merchandise;    
    }

    async create(payload) {

        const merchandise = this.extractMerchandiseData(payload);
        console.log(this.Merchandise);
        const result = await this.Merchandise.findOneAndUpdate(
            merchandise,
            { returnDocument: "after", upsert: true}
        );
        
        return result;
    }
}

module.exports = MerchandiseService;