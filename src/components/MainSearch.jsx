/* eslint-disable react-hooks/exhaustive-deps */
import { Container, Row, Col, Form, Alert, Spinner } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { fetchJobs, saveSearchValue } from "../redux/actions";
import Job from "./Job";

const MainSearch = () => {
  const dispatch = useDispatch();
  const query = useSelector((state) => state.value.value);
  const jobs = useSelector((state) => state.jobs.stock);
  const areLoading = useSelector((state) => state.jobs.isLoading);
  const areError = useSelector((state) => state.jobs.isError);

  const handleChange = (e) => {
    e.preventDefault();
    dispatch(saveSearchValue(e.target.value));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch(fetchJobs(query));
  };

  return (
    <Container>
      <div className="d-flex justify-content-center mt-2">
        <Link to="./Favs">Favourite List</Link>
      </div>
      <Row>
        <Col xs={10} className="mx-auto my-3 d-flex justify-content-center">
          <h1>Remote Jobs Search</h1>
        </Col>
        <Col xs={10} className="mx-auto">
          <Form onSubmit={handleSubmit}>
            <Form.Control
              type="search"
              onChange={handleChange}
              placeholder="type and press Enter"
            />
          </Form>
        </Col>
        <Col xs={10} className="mx-auto mb-5">
          {areError ? (
            <Alert variant="danger" className="text-center">
              `An Error Occured. Look here []`
            </Alert>
          ) : (
            <Col xs={12} className="mx-auto mb-5">
              {jobs.map((jobData) => (
                <Job key={jobData._id} data={jobData} />
              ))}
            </Col>
          )}
          <div className="d-flex justify-content-center">
            {areLoading && (
              <Spinner
                animation="border"
                variant="success"
                className="ml-2, mt-5"
              />
            )}
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default MainSearch;
