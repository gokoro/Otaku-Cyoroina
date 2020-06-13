import styles from './BigText.module.css'

const BigText = ({article}) => {
    return (
        <div className={styles.bigtext}>
            {article}
        </div>
    )
}
export default BigText