class CaixaDaLanchonete {
    calcularValorDaCompra(metodoDePagamento, itens) {
        const cardapio = {
            cafe: 3.00,
            chantily: 1.50,
            suco: 6.20,
            sanduiche: 6.50,
            queijo: 2.00,
            salgado: 7.25,
            combo1: 9.50,
            combo2: 7.50
        };

        if (!["dinheiro", "debito", "credito"].includes(metodoDePagamento)) {
            return "Forma de pagamento inválida!";
        }

        if (itens.length === 0) {
            return "Não há itens no carrinho de compra!";
        }

        
        let total = 0;
        for (const itemInfo of itens) {
            const [codigo, quantidade] = itemInfo.split(",");
            const precoItem = cardapio[codigo];
            
            if (!precoItem) {
                return "Item inválido!";
            }

            if (quantidade <= 0) {
                return "Quantidade inválida!";
            }

            if (codigo === "queijo" && !itens.some(item => item.startsWith("sanduiche"))) {
                return "Item extra não pode ser pedido sem o principal";
            }
    
            if (codigo === "chantily" && !itens.some(item => item.startsWith("sanduiche"))) {
                return "Item extra não pode ser pedido sem o principal";
            }
            
            total += precoItem * quantidade;
        }

        if (metodoDePagamento === "dinheiro") {
            total *= 0.95; // Aplicar desconto de 5% para pagamento em dinheiro
        } else if (metodoDePagamento === "credito") {
            total *= 1.03; // Aplicar acréscimo de 3% para pagamento a crédito
        }

        return `R$ ${total.toFixed(2).replace(".", ",")}`;
    }
}

export { CaixaDaLanchonete };
