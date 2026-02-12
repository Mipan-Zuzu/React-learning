import SecondParent from "./SecondParent"

const FristParent = ({name}) => {
    return (
        <div>
            <h1>hiiii ini 1</h1>
            <SecondParent name={name} /> 
        </div>
    )
}

export default FristParent