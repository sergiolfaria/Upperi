//variaveis globais
let carrinho1 = 0, carrinho2 = 0, carrinho3 = 0, carrinho4 = 0;
let dinheiro1 = 0, dinheiro2 = 0, dinheiro3 = 0, dinheiro4 = 0, total = 0;
var container = document.querySelector('carrinhocompra1');
let carrinho_show = true


/*clicks do carrinho fazem os valores aparecerem na tela e alguns apagam os valores identificadas por  
click_do_carrinho_p1 click_do_carrinho_remover_p1 e sucessetivamente até atingir o p4 */

// primeiro click
function click_do_carrinho_p1() {
    var botoes = document.getElementsByClassName("carrinho");
    var botao = document.getElementById("carrinho_p1");
    var valor = document.getElementById("qtd1");
    console.log(botoes);
    dinheiro1 = dinheiro1 + 5;
    carrinho1++;
    alert(`Adicionando ao carrinho ficando agora com ${carrinho1}x Crédito Pessoal saindo pelo preço ${dinheiro1} reais`);
    carrinho_p1.value = carrinho1;
    qtd1.value = dinheiro1;
}
function click_do_carrinho_remover_p1() {
    var botoes = document.getElementsByClassName("carrinho");
    var botao = document.getElementById("carrinho_p1");
    var valor = document.getElementById("qtd1");
    var export_Total = document.createElement('li');
    var item_pai = document.getElementById('Total');
    console.log(botoes);
    if (carrinho1 >= 1) {
        dinheiro1 = -5 + dinheiro1;
        carrinho1--;
        alert(`Removendo do carrinho ficando agora com ${carrinho1}x Crédito Pessoal saindo pelo preço ${dinheiro1} reais`);
        carrinho_p1.value = carrinho1;
        qtd1.value = dinheiro1;
        document.getElementById('carrinhocompra1').innerHTML = `${carrinho1}X Credito pessoal`;
        total = dinheiro1 + dinheiro2 + dinheiro3 + dinheiro4;
    }
    if (document.getElementById('Total') != null) {


        document.getElementById('Total').innerHTML = `Total gasto : (${dinheiro1 + dinheiro2 + dinheiro3 + dinheiro4} Reais)`;
    }
    if (total == 0) {
        document.getElementById('Total').innerHTML = ``;

    }
    else if (total == 0) {
        document.getElementById('Total').innerHTML = ` `;
    }
    else {

        export_Total.setAttribute('id', '00001');
        item_pai.appendChild(export_Total);
    }
    if (carrinho1 < 1) {
        alert(`Seu carrinho possui ${carrinho1} itens por isso não foi possivel diminuir `);
        document.getElementById('carrinhocompra1').innerHTML = ``;
    }
    total();
}
//segundo click
function click_do_carrinho_p2() {
    var botoes = document.getElementsByClassName("carrinho");
    var botao = document.getElementById("carrinho_p2");
    var valor = document.getElementById("qtd2");
    console.log(botoes);
    dinheiro2 = dinheiro2 + 10;
    carrinho2++;
    alert(`Adicionando ao carrinho ficando agora com ${carrinho2}x créditos de Controle e Orientação Financeira saindo pelo preço ${dinheiro2} reais`);
    carrinho_p2.value = carrinho2;
    qtd2.value = dinheiro2;


}
function click_do_carrinho_remover_p2() {
    var botoes = document.getElementsByClassName("carrinho");
    var botao = document.getElementById("carrinho_p2");
    var valor = document.getElementById("qtd2");
    var export_Total = document.createElement('li');
    var item_pai = document.getElementById('Total');
    console.log(botoes);
    if (carrinho2 >= 1) {
        dinheiro2 = -10 + dinheiro2;
        carrinho2--;
        alert(`Removendo do carrinho ficando agora com ${carrinho2}x Controle e orientação financeira saindo pelo preço ${dinheiro2} reais`);
        carrinho_p2.value = carrinho2;
        qtd2.value = dinheiro2;
        document.getElementById('carrinhocompra2').innerHTML = `${carrinho2}X Controle e orientação financeira (${dinheiro2} Reais)`;
        total = dinheiro1 + dinheiro2 + dinheiro3 + dinheiro4;
    }
    if (document.getElementById('Total') != null) {
        document.getElementById('Total').innerHTML = `Total gasto : (${dinheiro1 + dinheiro2 + dinheiro3 + dinheiro4} Reais)`;
    }
    if (total == 0) {
        document.getElementById('Total').innerHTML = ``;

    }
    else {
        export_Total.setAttribute('id', '00002');
        item_pai.appendChild(export_Total);
    }
    if (carrinho2 < 1) {
        alert(`Seu carrinho possui ${carrinho2} itens por isso não foi possivel diminuir `);
        document.getElementById('carrinhocompra2').innerHTML = ``;
    }
    total();
}
//terceiro click
function click_do_carrinho_p3() {
    var botoes = document.getElementsByClassName("carrinho");
    var botao = document.getElementById("carrinho_p3");
    var valor = document.getElementById("qtd3");
    console.log(botoes);
    dinheiro3 = dinheiro3 + 20;
    carrinho3++;
    alert(`Adicionando ao carrinho ficando agora com ${carrinho3}x créditos de Controle e Orientação Financeira (Avançado) saindo pelo preço ${dinheiro3} reais`);
    carrinho_p3.value = carrinho3;
    qtd3.value = dinheiro3;
}
function click_do_carrinho_remover_p3() {
    var botoes = document.getElementsByClassName("carrinho");
    var botao = document.getElementById("carrinho_p3");
    var valor = document.getElementById("qtd3");
    var export_Total = document.createElement('li');
    var item_pai = document.getElementById('Total');
    console.log(botoes);
    if (carrinho3 >= 1) {
        dinheiro3 = -20 + dinheiro3;
        carrinho3--;
        alert(`Removendo do carrinho ficando agora com ${carrinho3}x Controle e orientação financeira (Avançada) saindo pelo preço ${dinheiro3} reais`);
        carrinho_p3.value = carrinho3;
        qtd3.value = dinheiro3;
        document.getElementById('carrinhocompra3').innerHTML = `${carrinho3}X Controle e orientação financeira (Avançada) (${dinheiro3} Reais)`;
        total = dinheiro1 + dinheiro2 + dinheiro3 + dinheiro4;
    }
    if (document.getElementById('Total') != null) {
        document.getElementById('Total').innerHTML = `Total gasto : (${dinheiro1 + dinheiro2 + dinheiro3 + dinheiro4} Reais)`;
    }
    if (total == 0) {
        document.getElementById('Total').innerHTML = ``;

    }
    else {
        export_Total.setAttribute('id', '00003');
        item_pai.appendChild(export_Total);
    }
    if (carrinho3 < 1) {
        alert(`Seu carrinho possui ${carrinho3} itens por isso não foi possivel diminuir `);
        document.getElementById('carrinhocompra3').innerHTML = ``;
    }
    total();
}
//quarto click
function click_do_carrinho_p4() {
    var botoes = document.getElementsByClassName("carrinho");
    var botao = document.getElementById("carrinho_p4");
    var valor = document.getElementById("qtd4");
    console.log(botoes);
    dinheiro4 = dinheiro4 + 40;
    carrinho4++;
    alert(`Adicionando ao carrinho ficando agora com ${carrinho4}x créditos de Controle e Orientação Financeira (Prime) saindo pelo preço ${dinheiro4} reais`);
    carrinho_p4.value = carrinho4;
    qtd4.value = dinheiro4;
}
function click_do_carrinho_remover_p4() {
    var botoes = document.getElementsByClassName("carrinho");
    var botao = document.getElementById("carrinho_p4");
    var valor = document.getElementById("qtd4");
    var export_Total = document.createElement('li');
    var item_pai = document.getElementById('Total');
    console.log(botoes);
    if (carrinho4 >= 1) {
        dinheiro4 = -40 + dinheiro4;
        carrinho4--;
        alert(`Removendo do carrinho ficando agora com ${carrinho4}x Controle e orientação financeira (Prime) saindo pelo preço ${dinheiro4} reais`);
        carrinho_p4.value = carrinho4;
        qtd4.value = dinheiro4;
        document.getElementById('carrinhocompra4').innerHTML = `${carrinho4}X Controle e orientação financeira (Prime) (${dinheiro4} Reais)`;
        total = dinheiro1 + dinheiro2 + dinheiro3 + dinheiro4;
    }

    if (document.getElementById('Total') != null) {
        document.getElementById('Total').innerHTML = `Total gasto : (${dinheiro1 + dinheiro2 + dinheiro3 + dinheiro4} Reais)`;
    }
    if (total == 0) {
        document.getElementById('Total').innerHTML = ``;

    }
    else {
        export_Total.setAttribute('id', '00004');
        item_pai.appendChild(export_Total);
    }
    if (carrinho4 < 1) {
        alert(`Seu carrinho possui ${carrinho4} itens por isso não foi possivel diminuir `);
        document.getElementById('carrinhocompra4').innerHTML = ``;
    }
    total();
}

/*itens do carrinho exibidos no carrinho position fixed que podem ser apagados ou adicionados localizados como ItemCarrinho1 e sucessetivamente até o 4
chama as funçoes denomidas de  click_do_carrinho_p1*/
// primeiro item
function ItemCarrinho1() {
    click_do_carrinho_p1();

    var export_item1 = document.createElement('li');
    var export_Total = document.createElement('li');
    var item_pai = document.getElementById('Total');
    var item_pai = document.getElementById('carrinhocompra1');
    total = dinheiro1 + dinheiro2 + dinheiro3 + dinheiro4;
    if (document.getElementById('carrinhocompra1') != null) {
        document.getElementById('carrinhocompra1').innerHTML = `${carrinho1}X Credito pessoal (${dinheiro1} Reais)`;
    }
    else {
        export_item1.setAttribute('id', '00001');
        item_pai.appendChild(export_item1);
        export_item1.innerHTML = `${carrinho1}X Controle e orientação financeira (${dinheiro1} Reais)`;

    }
    if (document.getElementById('Total') != null) {
        if (total != 0) {

            document.getElementById('Total').innerHTML = `Total gasto : (${dinheiro1 + dinheiro2 + dinheiro3 + dinheiro4} Reais)`;
        }
    }
    else {

        export_Total.setAttribute('id', '00002');
        item_pai.appendChild(export_Total);
        export_Total.innerHTML = (`Total gasto : (${dinheiro1 + dinheiro2 + dinheiro3 + dinheiro4} Reais)`);
    }

}
//segundo item
function ItemCarrinho2() {
    click_do_carrinho_p2();
    var export_item1 = document.createElement('li');
    var export_Total = document.createElement('li');
    var item_pai = document.getElementById('Total');
    var item_pai = document.getElementById('carrinhocompra2');
    total = dinheiro1 + dinheiro2 + dinheiro3 + dinheiro4;
    if (document.getElementById('carrinhocompra2') != null) {
        document.getElementById('carrinhocompra2').innerHTML = `${carrinho2}X Controle e orientação financeira (${dinheiro2} Reais)`;
    }
    else {
        export_item1.setAttribute('id', '00002');
        item_pai.appendChild(export_item2);
        export_item1.innerHTML = `${carrinho2}X Controle e orientação financeira (${dinheiro2} Reais)`;

    }
    if (document.getElementById('Total') != null) {
        if (total != 0) {

            document.getElementById('Total').innerHTML = `Total gasto : (${dinheiro1 + dinheiro2 + dinheiro3 + dinheiro4} Reais)`;
        }
    }
    else {

        export_Total.setAttribute('id', '00002');
        item_pai.appendChild(export_Total);
        export_Total.innerHTML = (`Total gasto : (${dinheiro1 + dinheiro2 + dinheiro3 + dinheiro4} Reais)`);
    }



}
//terceiro item
function ItemCarrinho3() {
    click_do_carrinho_p3();
    var export_item1 = document.createElement('li');
    var export_Total = document.createElement('li');
    var item_pai = document.getElementById('Total');
    var item_pai = document.getElementById('carrinhocompra3');
    total = dinheiro1 + dinheiro2 + dinheiro3 + dinheiro4;
    if (document.getElementById('carrinhocompra3') != null) {
        document.getElementById('carrinhocompra3').innerHTML = `${carrinho3}X Controle e orientação financeira (Avançado) (${dinheiro3} Reais)`;
    }
    else {
        export_item1.setAttribute('id', '00003');
        item_pai.appendChild(export_item3);
        export_item1.innerHTML = `${carrinho3}X Controle e orientação financeira (Avançado) (${dinheiro3} Reais)`;
    }
    if (document.getElementById('Total') != null) {


        document.getElementById('Total').innerHTML = `Total gasto : (${dinheiro1 + dinheiro2 + dinheiro3 + dinheiro4} Reais)`;

    }
    else {

        export_Total.setAttribute('id', '00002');
        item_pai.appendChild(export_Total);
        export_Total.innerHTML = (`Total gasto : (${dinheiro1 + dinheiro2 + dinheiro3 + dinheiro4} Reais)`);
    }

}
//quarto item
function ItemCarrinho4() {
    click_do_carrinho_p4();
    var export_item1 = document.createElement('li');
    var export_Total = document.createElement('li');
    var item_pai = document.getElementById('Total');
    var item_pai = document.getElementById('carrinhocompra4');
    total = dinheiro1 + dinheiro2 + dinheiro3 + dinheiro4;
    if (document.getElementById('carrinhocompra4') != null) {
        document.getElementById('carrinhocompra4').innerHTML = `${carrinho4}X Controle e orientação financeira (Prime) (${dinheiro4} Reais)`;
    }
    else {
        export_item1.setAttribute('id', '00004');
        item_pai.appendChild(export_item4);
        export_item1.innerHTML = `${carrinho4}X Controle e orientação financeira (Prime) (${dinheiro4} Reais)`;
    }
    if (document.getElementById('Total') != null) {


        document.getElementById('Total').innerHTML = `Total gasto : (${dinheiro1 + dinheiro2 + dinheiro3 + dinheiro4} Reais)`;

    }
    else {

        export_Total.setAttribute('id', '00002');
        item_pai.appendChild(export_Total);
        export_Total.innerHTML = (`Total gasto : (${dinheiro1 + dinheiro2 + dinheiro3 + dinheiro4} Reais)`);
    }
}
// roda o alert do readonly nos inputs que não podem ser modificados
function click_do_readonly() {
    var leitura = document.getElementsByClassName("Leia"); -
        alert(`campo exclusivo para leitura`);
}
// roda o resumo do pedido e apaga as informaçoes
function Finalizar_carrinho() {
    if (carrinho1 != 0 && carrinho2 != 0 && carrinho3 != 0 && carrinho4 != 0) {
        alert(`Você esta finalizando o carrinho :\n${carrinho1}X Credito pessoal (${dinheiro1} Reais)\n${carrinho2}X Controle e orientação financeira (${dinheiro2} Reais)\n${carrinho3}X Controle e orientação financeira avançado (${dinheiro3} Reais)\n${carrinho4}X Controle e orientação financeira prime (${dinheiro4} Reais)\nTotal gasto (${dinheiro1 + dinheiro2 + dinheiro3 + dinheiro4} Reais)`);
    }
    else if (carrinho1 > 0 && carrinho2 == 0 && carrinho3 == 0 && carrinho4 == 0) {
        alert(`Você esta finalizando o carrinho :\n${carrinho1}X Credito pessoal (${dinheiro1} Reais)\nTotal gasto (${dinheiro1 + dinheiro2 + dinheiro3 + dinheiro4} Reais)`);
    }
    else if (carrinho1 > 0 && carrinho2 > 0 && carrinho3 == 0 && carrinho4 == 0) {
        alert(`Você esta finalizando o carrinho :\n${carrinho1}X Credito pessoal (${dinheiro1} Reais)\n${carrinho2}X Controle e orientação financeira (${dinheiro2} Reais)\nTotal gasto (${dinheiro1 + dinheiro2 + dinheiro3 + dinheiro4} Reais)`);

    }
    else if (carrinho1 > 0 && carrinho2 == 0 && carrinho3 == 0 && carrinho4 > 0) {
        alert(`Você esta finalizando o carrinho :\n${carrinho1}X Credito pessoal (${dinheiro1} Reais)\n${carrinho4}X Controle e orientação financeira (${dinheiro4} Reais)\nTotal gasto (${dinheiro1 + dinheiro2 + dinheiro3 + dinheiro4} Reais)`);

    }
    else if (carrinho1 == 0 && carrinho2 == 0 && carrinho3 > 0 && carrinho4 > 0) {
        alert(`Você esta finalizando o carrinho :\n${carrinho3}X  Controle e orientação financeira avançado (${dinheiro3} Reais)\n${carrinho4}X Controle e orientação financeira (prime) (${dinheiro4} Reais)\nTotal gasto (${dinheiro1 + dinheiro2 + dinheiro3 + dinheiro4} Reais)`);

    }
    else if (carrinho1 > 0 && carrinho2 > 0 && carrinho3 > 0 && carrinho4 == 0) {
        alert(`Você esta finalizando o carrinho :\n${carrinho1}X Credito pessoal (${dinheiro1} Reais)\n${carrinho2}X Controle e orientação financeira (${dinheiro2} Reais)\n${carrinho3}X Controle e orientação financeira avançado (${dinheiro3} Reais)\nTotal gasto (${dinheiro1 + dinheiro2 + dinheiro3 + dinheiro4} Reais)`);

    }
    else if (carrinho1 == 0 && carrinho2 > 0 && carrinho3 > 0 && carrinho4 > 0) {
        alert(`Você esta finalizando o carrinho :\n${carrinho2}X Controle e orientação financeira  (${dinheiro2} Reais)\n${carrinho3}X Controle e orientação financeira avançado (${dinheiro3} Reais)\n${carrinho4}X Controle e orientação financeira prime (${dinheiro4} Reais)\nTotal gasto (${dinheiro1 + dinheiro2 + dinheiro3 + dinheiro4} Reais)`);

    }
    else if (carrinho1 == 0 && carrinho2 > 0 && carrinho3 > 0 && carrinho4 == 0) {
        alert(`Você esta finalizando o carrinho :\n${carrinho2}X Controle e orientação financeira (${dinheiro2} Reais)\n${carrinho3}X Controle e orientação financeira avançado (${dinheiro3} Reais)\nTotal gasto (${dinheiro1 + dinheiro2 + dinheiro3 + dinheiro4} Reais)`);

    }
    else if (carrinho1 == 0 && carrinho2 > 0 && carrinho3 == 0 && carrinho4 > 0) {
        alert(`Você esta finalizando o carrinho :\n${carrinho2}X Controle e orientação financeira (${dinheiro2} Reais)\n${carrinho4}X Controle e orientação financeira (Prime) (${dinheiro4} Reais)\nTotal gasto (${dinheiro1 + dinheiro2 + dinheiro3 + dinheiro4} Reais)`);

    }
    else if (carrinho1 > 0 && carrinho2 > 0 && carrinho3 == 0 && carrinho4 > 0) {
        alert(`Você esta finalizando o carrinho :\n${carrinho1}X Credito pessoal (${dinheiro1} Reais)\n${carrinho2}X Controle e orientação financeira (${dinheiro2} Reais)\n${carrinho4}X Controle e orientação financeira (Prime) (${dinheiro4} Reais)\nTotal gasto (${dinheiro1 + dinheiro2 + dinheiro3 + dinheiro4} Reais)`);

    }
    else if (carrinho1 > 0 && carrinho2 == 0 && carrinho3 > 0 && carrinho4 > 0) {
        alert(`Você esta finalizando o carrinho :\n${carrinho1}X Credito pessoal (${dinheiro1} Reais)\n${carrinho3}X Controle e orientação financeira avançada (${dinheiro3} Reais)\n${carrinho4}X Controle e orientação financeira (Prime) (${dinheiro4} Reais)\nTotal gasto (${dinheiro1 + dinheiro2 + dinheiro3 + dinheiro4} Reais)`);

    }
    else if (carrinho1 == 0 && carrinho2 > 0 && carrinho3 == 0 && carrinho4 == 0) {
        alert(`Você esta finalizando o carrinho :\n${carrinho2}X Controle e orientação financeira (${dinheiro2} Reais)\nTotal gasto (${dinheiro1 + dinheiro2 + dinheiro3 + dinheiro4} Reais)`);

    }
    else if (carrinho1 == 0 && carrinho2 == 0 && carrinho3 > 0 && carrinho4 == 0) {
        alert(`Você esta finalizando o carrinho :\n${carrinho3}X Controle e orientação financeira avançada (${dinheiro3} Reais)\nTotal gasto (${dinheiro1 + dinheiro2 + dinheiro3 + dinheiro4} Reais)`);

    }
    else if (carrinho1 == 0 && carrinho2 == 0 && carrinho3 == 0 && carrinho4 > 0) {
        alert(`Você esta finalizando o carrinho :\n${carrinho4}X Controle e orientação financeira prime (${dinheiro4} Reais)\n\nTotal gasto (${dinheiro1 + dinheiro2 + dinheiro3 + dinheiro4} Reais)`);

    }
    else {
        alert(`Carrinho vazio não foi possivel concluir`);

    }
    carrinho1 = 0, carrinho2 = 0, carrinho3 = 0, carrinho4 = 0;
    dinheiro1 = 0, dinheiro2 = 0, dinheiro3 = 0, dinheiro4 = 0, total = 0;
    document.getElementById('Total').innerHTML = ``;
    document.getElementById('carrinhocompra1').innerHTML = ``;
    document.getElementById('carrinhocompra2').innerHTML = ``;
    document.getElementById('carrinhocompra3').innerHTML = ``;
    document.getElementById('carrinhocompra4').innerHTML = ``;
    document.getElementById('carrinho_p1').value = 0;
    document.getElementById('carrinho_p2').value = 0;
    document.getElementById('carrinho_p3').value = 0;
    document.getElementById('carrinho_p4').value = 0;
    document.getElementById('qtd1').value = 0;
    document.getElementById('qtd2').value = 0;
    document.getElementById('qtd3').value = 0;
    document.getElementById('qtd4').value = 0;

}
//apaga os pedidos para que possa ser reiniciado caso o usuario deseje
function Reinicio_carrinho() {
    alert(`apagando todos pedidos`);
    carrinho1 = 0, carrinho2 = 0, carrinho3 = 0, carrinho4 = 0;
    dinheiro1 = 0, dinheiro2 = 0, dinheiro3 = 0, dinheiro4 = 0, total = 0;
    document.getElementById('Total').innerHTML = ``;
    document.getElementById('carrinhocompra1').innerHTML = ``;
    document.getElementById('carrinhocompra2').innerHTML = ``;
    document.getElementById('carrinhocompra3').innerHTML = ``;
    document.getElementById('carrinhocompra4').innerHTML = ``;
    document.getElementById('carrinho_p1').value = 0;
    document.getElementById('carrinho_p2').value = 0;
    document.getElementById('carrinho_p3').value = 0;
    document.getElementById('carrinho_p4').value = 0;
    document.getElementById('qtd1').value = 0;
    document.getElementById('qtd2').value = 0;
    document.getElementById('qtd3').value = 0;
    document.getElementById('qtd4').value = 0;
}
// faz o carrinho aparecer e sumir dependendo dos clicks
function toggle_carrinho() {
    let elementCarrinho = document.getElementById("carrinho_js");
    if (carrinho_show) {
        elementCarrinho.classList.add("display_none");
        carrinho_show = false;
    }
    else {
        elementCarrinho.classList.remove("display_none");
        carrinho_show = true;

    }
}