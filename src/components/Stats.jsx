import { ProgressBar } from "react-bootstrap";

const Stats = ({num}) => {
  let variant = "primary";

  if (num <= 30)  variant="danger";
  if (num > 30 && num <= 50)  variant="warning";
  if (num > 50 && num <= 70)  variant="info";
  if (num > 70)  variant="success";
  
  return(
    <ProgressBar variant={variant} now={num} />
  );
} 

export default Stats;