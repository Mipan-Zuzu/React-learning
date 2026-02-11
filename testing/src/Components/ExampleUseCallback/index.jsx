import { useCallback, useState } from "react"
import Search from "./Search"

const dataUser = ["mipan","suki", "liar", "banget"]

const ExampleUseCallback = () => {
    const [count, setCount] = useState(0)
    const [user, setUser] = useState(dataUser)

    const handleIncrement = () => {
        console.log("increment render")
        setCount(count + 1)
    }

    const suffle = (arr) => {
       return [...arr].sort(() => 0.5 - Math.random())
    }

    const handleSearch = useCallback((text) => {
        const hasil = text.toLowerCase()
        const filteredUser = dataUser.filter((user) => user.includes(hasil))
        setUser(filteredUser)
    }, [])
 
    return(
        <div>
            <div>
                <h4>count : {count}</h4>
            <button onClick={handleIncrement}>incremenet</button>
            </div>
            <Search onChange={handleSearch} />
            <div>
                {user.map((item, index) => (
                    <div key={index}>
                        <h3>{item}</h3>
                    </div>
                ))}
                <button onClick={() => setUser(suffle(dataUser))}>suffle</button>
            </div>
        </div>
    )
}

export default ExampleUseCallback