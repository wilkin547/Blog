var Blog_Container = document.getElementById("blog_Content");

class blog{
    constructor(img, title,link){
        this.img = img;
        this.title = title;
        this.link = link;
        this.Content = document.createElement("div");
        this.Content.innerHTML = `<div class="blog">
        <img class="Portada" src="${img}" alt="Mi bello rostro xd">
        <div class="Titulo"><a href="${link}"><b>${title}</b></a>
        </div>   
    </div>`;
    Blog_Container.appendChild(this.Content)

}

}

var FirstBlog = new blog(
    "https://th.bing.com/th/id/R.9e0dd549040ea96fe051de1d9134f59a?rik=FHP0XaNMm5c8sA&pid=ImgRaw&r=0",
    "Mi primerBlogJS,",
    "https://color.adobe.com/create/color-wheel");
    alert("hola")
    