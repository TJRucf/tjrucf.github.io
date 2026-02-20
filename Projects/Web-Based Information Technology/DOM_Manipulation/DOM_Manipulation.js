function showFilter(){
    var filter = document.getElementById("filterContent");
    if(filter.style.display === "none"){
        filter.style.display = "block";
    } else {
        filter.style.display = "none";
    }
}

function showAddNew(){
    var button = document.getElementById("newContent");
    if(button.style.display === "none"){
        button.style.display = "flex";
    } else {
        button.style.display = "none";
    }
}

function addNewArticle(){
    const headerContent = document.getElementById("inputHeader");
    const title = headerContent.value;

    const type = document.querySelector('input[name="articleType"]:checked').id;
    
    const articleContent = document.getElementById("inputArticle");
    const article = articleContent.value;
    
    const cont = document.getElementById("articleList");
    const newArticle = document.createElement('article');
    newArticle.classList.add(type);
    
    const newMarker = document.createElement('span');
    newMarker.classList.add('marker');

    if(type === "opinionRadio"){
        newMarker.textContent = "Opinion";
        newArticle.classList.add("opinion");
    } else if (type === "recipeRadio"){
        newMarker.textContent = "Recipe";
        newArticle.classList.add("recipe");
    } else if (type === "lifeRadio"){
        newMarker.textContent = "Update";
        newArticle.classList.add("update");
    }
    
    const newTitle = document.createElement('h2');
    newTitle.textContent = title;
    newTitle.classList.add("title");
    
    const newContent = document.createElement('p');
    newContent.textContent = article;
    
    newArticle.appendChild(newMarker);
    newArticle.appendChild(newTitle);
    newArticle.appendChild(newContent);
    
    cont.appendChild(newArticle);
}