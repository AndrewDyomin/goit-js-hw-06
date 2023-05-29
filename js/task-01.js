    const categoriesSum = document.querySelector('#categories').children.length;
    console.log(`Number of categories: ${categoriesSum}`);

    const items = document.querySelectorAll('.item');
    Array.prototype.forEach.call(items, (element) => {
      const title = element.querySelector('h2').innerHTML;
      const itemsLength = element.querySelectorAll('li').length;
      console.log(`Category: ${title}`);
      console.log(`Elements: ${itemsLength}`);
    });