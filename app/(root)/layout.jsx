export default async function Layout({children}){
    return (
        <>
            <div>left sidebar</div>
            <div>{children}</div>
            <div>right sidebar</div>
        </>
    )
}