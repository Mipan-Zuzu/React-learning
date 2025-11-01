const AuthLayouts = (props) => {
    const {children, title} = props
    return (
        <div className="w-full max-w-xs">
        <h1 className="text-3xl font-mono">{title}</h1>
        <p className="font-mono font-light mb-8">
          Welcome, Please input data valid
        </p>
          {children}
      </div>
    )
}

export default AuthLayouts