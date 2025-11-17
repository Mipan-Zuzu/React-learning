import axios from "axios"

export const getProduct = (callback) => {
    axios.get("https://fakestoreapi.com/products")
    .then((res) => {
        console.log([{"status" : 200},{"msg" : "fetch berhasil di lakukan"}])
        callback(res.data )
    })
    .catch((err) => {
        console.log({"status" : 404, "msg" : "fetch data gagal di lakukan"})
        console.log({"sistem" : `${err}`})
    })
}