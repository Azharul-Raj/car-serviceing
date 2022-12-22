const verifyUserToken = (profile) => {
    const userInfo = {
        email: profile.email
    }
    fetch('http://localhost:3001/token', {
        method: "POST",
        headers: {
            "content-type":"application/json"
        },
        body:JSON.stringify(userInfo)
    })
    .then(res => res.json())
    .then(data => {
        console.log(data.token)
        localStorage.setItem('token',data.token)
    })
    .catch(err=>console.error(err))
}
export default verifyUserToken;