import {useRouter} from "next/router";
import MainContainer from "../../components/MainContainer";

export default function User({user}) {
    const {query} = useRouter()
    return (
        <MainContainer keywords={user.name}>
            <h1>Пользователь с id {query.id}</h1>
            <div>Имя пользователя - {user.name}</div>
        </MainContainer>
    )
}

export async function getServerSideProps({params}) {
    console.log(params)
    const res = await fetch(`https://jsonplaceholder.typicode.com/users/${params.id}`)
    const user = await res.json()
    return {
        props: {user}
    }
}