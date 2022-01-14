import React, {FC} from 'react'
import PropTypes from 'prop-types'

type Prop = {
  value: string
}

const Result: FC<Prop> = ({ value }) => (
  <div className="result">
    <span>{value}</span>
  </div>
)

Result.propTypes = {
  value: PropTypes.string.isRequired
}

Result.defaultProps = {
  value: '0'
}

export default Result
