const url = '../data/items.json'

export const getItem = (id) => {

    return new Promise((resolve) => {
        /* setTimeout(() => { */
        resolve(fetch(url)
            .then(response => response.json())
            .then(
                data => {
                    return data.find((item) => item.id === parseInt(id));
                }))
        /* }, 2000); */
    })
}

export const getCategory = (idCategory) => {

    return new Promise((resolve) => {
        if (idCategory) {
            /* setTimeout(() => { */
            resolve(fetch(url)
                .then(response => response.json())
                .then(
                    data => {
                        return data.filter((items) => items.idCategory === idCategory);
                    }))
            /* }, 2000); */
        } else {
            /* setTimeout(() => { */
            resolve(fetch(url)
                .then(response => response.json())
                .then(data => {
                    return data;
                }))
            /*  }, 2000); */
        }

    })
}