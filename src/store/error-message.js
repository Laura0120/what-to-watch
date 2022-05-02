
const getErrorMessage = (err) => {
  const {message} = err;
  const node = document.createElement(`div`);
  node.className = `error-message`;
  node.style = `z-index: 100; margin: 0 auto; text-align: center; background-color: red;`;
  node.style.position = `absolute`;
  node.style.left = 0;
  node.style.right = 0;
  node.style.fontSize = `30px`;

  node.textContent = `Статус ответа: ` + message;
  document.body.insertAdjacentElement(`afterbegin`, node);
  document.addEventListener(`click`, deleteErrorMessage);

};

export {getErrorMessage};

const deleteErrorMessage = () => {
  document.body.querySelector(`.error-message`).remove();
  document.removeEventListener(`click`, deleteErrorMessage);
};
