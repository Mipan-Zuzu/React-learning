import { memo } from "react"

const Search = (props) => {
    const {onChange} = props
    console.log("search render")

    return (
        <input type="text" placeholder="serch" onChange={e => onChange(e.target.value)} />
    )
}
export default memo(Search)