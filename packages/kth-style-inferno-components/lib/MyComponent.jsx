import Inferno from 'inferno';
import classNames from 'classnames';

const defaultProps = {
  color: 'success',
  tag: 'div'
};

const MyComponent = (props) => {
  const {
    className,
    cssModule,
    tag: Tag,
    color, // success || info || warning || danger
    onClose,
    children,
    ...attributes
  } = props;

  const classes = classNames(
    className,
    'alert',
    `alert-${color}`,
    { 'alert-dismissible': onClose }
  );

  const closeClasses = 'close';

  return (
    <div>
      HEEEEJ!
      <Tag {...attributes} className={classes} role="alert">
        { onClose ?
          <button type="button" className={closeClasses} aria-label="Close" onClick={onClose}>
            <span aria-hidden="true">&times;</span>
          </button>
          : null }
        { children }
      </Tag>
    </div>
  )

};

MyComponent.defaultProps = defaultProps;

export default MyComponent;
