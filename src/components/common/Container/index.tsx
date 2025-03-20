import styles from "./Container.module.css"

export interface ContainerProps {
    children: any
    className?: string
}

const Container = ({ children, className }: ContainerProps) => {
    return (
        <div className={styles.container + (className ? ` ${className}` : "")}>
            {children}
        </div>
    )
}

export default Container