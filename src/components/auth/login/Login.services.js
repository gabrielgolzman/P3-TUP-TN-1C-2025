export const loginUser = (rq, onSuccess, onError) => {
    fetch("http://localhost:3000/login", {
        headers: {
            "Content-type": 'application/json'
        },
        method: "POST",
        body: JSON.stringify(rq)
    })
        .then(async res => {
            if (!res.ok) {
                const errData = await res.json();
                throw new Error(errData.message || "Algo ha salido mal");

            }

            return res.json();
        })
        .then(onSuccess)
        .catch(onError)
}