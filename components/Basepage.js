import {Container} from 'reactstrap';
const Basepage = props => {
  const {className = '', header, children, navheader} = props;
  return (
    <div className={`base-page ${className}`}>
      {navheader && <div>{navheader}</div>}
      <Container>
        {header && (
          <div className="page-header">
            <h1 className="page-header-title">{header}</h1>
          </div>
        )}
        {children}
      </Container>
    </div>
  );
};
export default Basepage;
