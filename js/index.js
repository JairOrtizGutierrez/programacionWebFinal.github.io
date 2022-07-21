$(function() {
    
    var glide = new Glide('#intro', {
        autoplay: 1500,
        type: 'carousel',
        perView: 5,
        focusAt: 'center'
    });
    
    glide.mount();
    
    $(window).scroll(function() {
        if($(window).scrollTop() > 0) {
            $('nav').css('background-color', '#fff');
        } else {
            $('nav').css('background-color', 'transparent');
        }
    });
    
    fetch('https://servicios.campus.pe/proveedores.php')
    .then(response => {
        return response.json();
    })
    .then(data => {
        var content = '';
        data.map(item => {
            content += '<tr>';
            content += '<td>' + item.idproveedor + '</td>';
            content += '<td>' + item.nombreempresa + '</td>';
            content += '<td>' + item.nombrecontacto + '</td>';
            content += '<td>' + item.cargocontacto + '</td>';
            content += '<td>' + item.ciudad + '</td>';
            content += '<td>' + item.pais + '</td>';
            content += '<td>' + item.telefono + '</td>';
            content += '<td><button class="btn info" data-bs-toggle="modal" data-bs-target="#info"><i class="bi bi-pencil"></i></button></td>';
            content += '</tr>';
        });
        
        $('table tbody').html(content);
        
        $('.info').click(e => {
            var index = $(e.currentTarget).parent().parent().index();
            var idproveedor = data[index].idproveedor;
            var nombreempresa = data[index].nombreempresa;
            var nombrecontacto = data[index].nombrecontacto;
            var cargocontacto = data[index].cargocontacto;
            var ciudad = data[index].ciudad;
            var pais = data[index].pais;
            var telefono = data[index].telefono;
            
            $('#id > span').html(idproveedor);
            $('#empresa > span').html(nombreempresa);
            $('#nombre > span').html(nombrecontacto);
            $('#cargo > span').html(cargocontacto);
            $('#ciudad > span').html(ciudad);
            $('#pais > span').html(pais);
            $('#telefono > span').html(telefono);
        });
    });

})