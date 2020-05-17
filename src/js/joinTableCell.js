$(function() {
    let tbody = $('tbody');
    for (let idx_tbody = 0; idx_tbody < tbody.length; idx_tbody++) {
        let col_num = tbody.eq(idx_tbody).children('tr').eq(0).children('td').length;

        for (let idx_col = 0; idx_col < col_num; idx_col++) {
            let rows = tbody.eq(idx_tbody).children('tr');

            let baseCell = rows.eq(0).children('td').eq(idx_col);

            let cnt = 1;
            for (let idx_row = 1; idx_row < rows.length; idx_row++) {
                let currentCell = rows.eq(idx_row).children('td').eq(idx_col);

                if (baseCell.text() === currentCell.text() && currentCell.hasClass('join_cell')) {
                    // join可能セルでテキストが一致する場合
                    // 1. 現在のセルにフラグを立てる
                    // 2. 基準セルのrowspanを拡張
                    currentCell.addClass('remove_cell');
                    cnt++;
                    baseCell.attr('rowspan', cnt);
                    console.log("* remove");
                } else {
                    // テキストが一致しない場合
                    // 1. 現在のセルを基準セルに設定
                    // 2. カウンタをリセット
                    baseCell = currentCell;
                    cnt = 1;
                }
            }
        }

        $('.remove_cell').remove();
    }
});
