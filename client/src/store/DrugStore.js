import {makeAutoObservable} from "mobx";

export default class DrugStore {
    constructor() {
        this._types = []
        this._drugs = []
        this._selectedType = {}
        this._page = 1
        this._totalCount = 0
        this._limit = 12
        makeAutoObservable(this)
    }

    setTypes(types) {
        this._types = types
    }

    setDrugs(drugs) {
        this._drugs = drugs
    }

    setSelectedType(type) {
        this.setPage(1)
        this._selectedType = type
    }
  
    setPage(page) {
        this._page = page
    }
    setTotalCount(count) {
        this._totalCount = count
    }

    get types() {
        return this._types
    }
  
    get drugs() {
        return this._drugs
    }
    get selectedType() {
        return this._selectedType
    }
  
    get totalCount() {
        return this._totalCount
    }
    get page() {
        return this._page
    }
    get limit() {
        return this._limit
    }
}