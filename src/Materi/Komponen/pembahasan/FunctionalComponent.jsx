const FunctionalComponent = ({nama}) => {

    return(
        <div>
            <h1>Membuat Komponen dengan Functional componet</h1>
            <h2>hallo {nama},selamat belajar</h2>
        </div>
    )
}

FunctionalComponent.defaultProps ={
    nama: 'dicky'
}

export default FunctionalComponent;