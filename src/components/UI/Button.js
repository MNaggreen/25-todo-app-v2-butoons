import styles from './Button.module.css'

function Button({
  onClick,
  children /* точто будет отображаться внутри кнопки */,
  title /* точто будет отображаться при наведении на кнопку */,
  disabled = false /* активность кнопки по умолчанию Активна */,
}) {
  return (
    <button
      className={styles.button}
      onClick={onClick}
      title={title}
      disabled={disabled}
    >
      {children}
    </button>
  )
}

/* то что мы пишем в теге button будет передаваться как children */

export default Button
