/*
  В функцию appendToBody передаются 3 параметра:
  tag - имя тега, content - содержимое тега и count - количество вставок.
  Необходимо, чтобы функция осуществила вставку на страницу указанный тег с указанным содержимым указанное число раз.
  Считаем, что всегда передается тег, допускающий вставку текста в качестве своего содержимого (P, DIV, I и пр.).
*/
export function appendToBody(tag, content, count) {
    for (let i = 0; i < count; i++) {
        document.body.insertAdjacentHTML(
            'afterbegin',
            '<' + tag + '>' + content,
        );
    }
}

/*
  Создайте дерево вложенных тегов DIV.
  Каждый узел дерева должен содержать childrenCount узлов.
  Глубина дерева задается параметром level.
  Каждый элемент должен иметь класс вида item_n, где n - глубина вложенности элемента. (Нумерацию ведем с единицы).
  Сформированное дерево верните в качестве результата работы функции.
*/
export function generateTree(childrenCount, level) {
    let n = 0;
    let count = 1;
    let str_def = 'item_';
    let str_class = 'item_';
    let count_prev = 1;
    let n_prev = 1;
    let str_prev = '';
    document.body.innerHTML = '<div></div>';
    const div1 = document.getElementsByTagName('div')[0];
    div1.classList.add('item_1');
    for (let i = 0; i < level - 1; i++) {
        n_prev = n;
        n = i + 1;
        str_prev = str_class;
        str_class = str_def + String(n + 1);
        count_prev = count;
        count = count * childrenCount;
        if (n == 1) {
            const div = document.getElementsByTagName('div')[0];
            for (let i = 0; i < count; i++) {
                div.insertAdjacentHTML('afterbegin', '<div></div>');
            }
            div.childNodes.forEach((element) =>
                element.classList.add(str_class),
            );
        } else {
            for (let i = 0; i < count_prev; i++) {
                let div = document.getElementsByClassName(str_prev)[i];
                for (let i1 = 0; i1 < childrenCount; i1++) {
                    div.insertAdjacentHTML('afterbegin', '<div></div>');
                }
                div.childNodes.forEach((element) =>
                    element.classList.add(str_class),
                );
            }
        }
    }
    return document.body.firstChild;
}

/*
  Используйте функцию для создания дерева тегов DIV из предыдущего задания.
  Создайте дерево с вложенностью 3 и числом элементов в каждом узле 2.
  Далее замените все узлы второго уровня (т.е. имеющие класс item_2) на теги SECTION.
  Остальную структуру дерева сохраните неизменной, включая классы и те элементы,
  которые находились внутри переписанных тегов.
  Сформированное дерево верните в качестве результата работы функции.
*/
export function replaceNodes() {
    let body1 = generateTree(2, 3);

    let new_child = document.createElement('section');
    new_child.classList.add('item_2');
    new_child.innerHTML = body1.firstChild.innerHTML;
    let new_child2 = document.createElement('section');
    new_child2.classList.add('item_2');
    new_child2.innerHTML = body1.firstChild.innerHTML;
    body1.removeChild(body1.getElementsByClassName('item_2')[0]);
    body1.removeChild(body1.getElementsByClassName('item_2')[0]);
    body1.appendChild(new_child);
    body1.appendChild(new_child2);

    return body1;
}
