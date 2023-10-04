const uuid = require('uuid')
const path = require('path');
const {Drug, DrugInfo} = require('../models/models')
const ApiError = require('../error/ApiError');

class DrugController{
    async create(req, res, next) {
        try {
            let {name, price, typeId, info} = req.body
            const {img} = req.files
            let fileName = uuid.v4() + ".jpg"
            img.mv(path.resolve(__dirname, '..', 'static', fileName))
            const drug = await Drug.create({name, price, typeId, img: fileName});

            if (info) {
                info = JSON.parse(info)
                info.forEach(i =>
                    DrugInfo.create({
                        title: i.title,
                        description: i.description,
                        drugId: drug.id
                    })
                )
            }

            return res.json(drug)
        } catch (e) {
            next(ApiError.badRequest(e.message))
        }

    }

    async getAll(req, res) {
        let {typeId, limit, page} = req.query
       
        page = Number(page) || 1
        limit = Number(limit) || 9
        let offset = page * limit - limit
        let drugs;
        if (!typeId) {
            drugs = await Drug.findAndCountAll({limit, offset})
        }
        if (typeId) {
            drugs = await Drug.findAndCountAll({where:{typeId}, limit, offset})
        }
        return res.json(drugs)
    }

    async getOne(req, res) {
        const {id} = req.params
        const drug = await Drug.findOne(
            {
                where: {id},
                include: [{model: DrugInfo, as: 'info'}]
            },
        )
        return res.json(drug)
    }
}

module.exports = new DrugController()