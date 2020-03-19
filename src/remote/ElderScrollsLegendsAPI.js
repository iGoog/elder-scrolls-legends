const cardUrl = 'https://api.elderscrollslegends.io/v1/cards';

const FetchCards = (page=0, name='', pageSize=20) => {
    const params = {
        page: page,
        name: name,
        pageSize: pageSize
    };
    // axios is more compatible and easier to use
    return fetch(
        cardUrl + '?' + new URLSearchParams(params).toString(), {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    });
};

export default FetchCards;