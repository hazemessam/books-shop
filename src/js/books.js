// Global Variables
const delBtns = document.querySelectorAll('.delete');

// Go to top
const goToTop = () => window.scrollTo(0, 0);


// Delete book
const delBook = (e) => {
    fetch(`/admin/del-book/${e.target.id}`, {method: 'delete'})
        .then(location.reload())
}

for (let delBtn of delBtns)
    delBtn.addEventListener('click', delBook);