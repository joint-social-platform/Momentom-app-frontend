const news = document.querySelectorAll("#new");

const markAsRead = () => {
    news.forEach((item) => {
        item.style.backgroundColor = "rgba(252, 226, 226, 0.13)"
    })
}