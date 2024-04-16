var danhSachSanPham = 'danhSachSanPham';
var sanPham = [
    {
        id: 1,
        hinhAnh: './Img/SP1.jpg',
        giaBan: '30.00',
        giaGiam: '40.00',
        ten: 'Shield Conditioner',
        soSao: '4',
        luotMua: '2947',
    },
    {
        id: 2,
        hinhAnh: './Img/SP2.jpg',
        giaBan: '20.00',
        giaGiam: '0',
        ten: 'Perfecting Facial Oil',
        soSao: '5',
        luotMua: '2947',
    },
    {
        id: 3,
        hinhAnh: './Img/SP3.jpg',
        giaBan: '29.00',
        giaGiam: '0',
        ten: 'Enriched Hand & Body Wash',
        soSao: '4',
        luotMua: '2947',
    },
    {
        id: 4,
        hinhAnh: './Img/SP4.jpg',
        giaBan: '30.00',
        giaGiam: '40.00',
        ten: 'Shield Conditioner',
        soSao: '4',
        luotMua: '2947',
    },
    {
        id: 5,
        hinhAnh: './Img/SP5.jpg',
        giaBan: '30.00',
        giaGiam: '40.00',
        ten: 'Shield Conditioner',
        soSao: '4',
        luotMua: '2947',
    },
    {
        id: 6,
        hinhAnh: './Img/SP6.jpg',
        giaBan: '30.00',
        giaGiam: '40.00',
        ten: 'Intensive Glow C+ Serum',
        soSao: '4',
        luotMua: '2947',
    },
    {
        id: 7,
        hinhAnh: './Img/SP7.jpg',
        giaBan: '30.00',
        giaGiam: '40.00',
        ten: 'Hand Cream',
        soSao: '4',
        luotMua: '2947',
    },
    {
        id: 8,
        hinhAnh: './Img/SP8.jpg',
        giaBan: '50.00',
        giaGiam: '60.00',
        ten: 'Vital Eye Cream',
        soSao: '5',
        luotMua: '2147',
    }
]

localStorage.setItem(danhSachSanPham, JSON.stringify(sanPham));
let data = JSON.parse(localStorage.getItem(danhSachSanPham));

function TaoDoiTuongSanPham(id, hinhAnh, giaBan, giaGiam, ten, soSao, luotMua) {
    var sanPham = new Object();
    sanPham.id = id;
    sanPham.hinhAnh = hinhAnh;
    sanPham.giaBan = giaBan;
    sanPham.giaGiam = giaGiam;
    sanPham.ten = ten;
    sanPham.soSao = soSao;
    sanPham.luotMua = luotMua;
    sanPham.fromJSON = function (json) {
        var doiTuong = JSON.parse(json);
        var doiTuongDayDu = TaoDoiTuongSanPham(doiTuong.id, doiTuong.hinhAnh, doiTuong.giaBan, doiTuong.giaGiam, doiTuong.ten, doiTuong.soSao, doiTuong.luotMua);
        return doiTuongDayDu;
    }
    return sanPham;
}

function chuyenDanhSachDoiTuongSanPhamThanhHTML(danhSachSanPham) {
    let HTMLDanhSachSanPham = '<div data-aos="fade-up" data-aos-duration="2000" id="products">';
    danhSachSanPham.forEach(function (sanPham) {
        HTMLDanhSachSanPham += chuyenDoiTuongSanPhamThanhHTML(sanPham);
    });
    HTMLDanhSachSanPham += '</div>';
    return HTMLDanhSachSanPham;
}

function chuyenDoiTuongSanPhamThanhHTML(sanPham) {
    let html = '';
    html += '<div id="product-' + sanPham.id + '" class="single-product">';
    html += '<div class="part-1">';
    html += '<img src="' + sanPham.hinhAnh + '" class="product-img" alt="">';
    html += ' <div class="icons">';
    html += '<i class="fas fa-shopping-cart"></i>';
    html += '<i class="fas fa-heart"></i>';
    html += '<i class="fas fa-plus"></i>';
    html += '<i class="fas fa-expand"></i>'
    html += '</div>';
    html += '</div>';
    html += '<div class="part-2">';
    html += '<nav class="d-flex">'
    if (sanPham.giaGiam == 0) {
        html += '<!--<del style="padding: 5px;">$40.00</del>-->'
    } else {
        html += '<del style="padding: 5px;">$' + sanPham.giaGiam + '</del>'
    }

    html += '<p style="margin: 0; padding: 5px;">$' + sanPham.giaBan + '</p>'
    html += '</nav>'
    html += '<a href="#" style="color: white; font-size: 20px;">' + sanPham.ten + '</a>'
    html += '<nav style="font-size: 14px;">'
    if (sanPham.soSao == 4) {
        html += '<i class="fa-solid fa-star"></i>'
            + '<i class="fa-solid fa-star"></i>'
            + '<i class="fa-solid fa-star"></i>'
            + '<i class="fa-solid fa-star"></i>'
            + '<i class="fa-regular fa-star"></i>'
    } else {
        html += '<i class="fa-solid fa-star"></i>'
            + '<i class="fa-solid fa-star"></i>'
            + '<i class="fa-solid fa-star"></i>'
            + '<i class="fa-solid fa-star"></i>'
            + '<i class="fa-solid fa-star"></i>'
    }

    html += '<span style="padding-left: 2px;">' + sanPham.luotMua + ' reviews</span>'
    html += '</nav>'
    html += '</div>'
    html += '</div>'
    return html;
}

var danhSachSanPham = JSON.parse(localStorage.getItem(danhSachSanPham));
var danhSachSanPhamHTML = chuyenDanhSachDoiTuongSanPhamThanhHTML(danhSachSanPham);
document.getElementById('products').innerHTML = danhSachSanPhamHTML;



