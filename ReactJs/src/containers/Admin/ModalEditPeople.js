import React, { Component } from "react";
import { connect } from "react-redux";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import _ from "lodash";
import { toast } from "react-toastify";
class ModalEditPeople extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: "",
      Ho_Ten: "",
      Nam_Sinh: "",
      Noi_Sinh: "",
      Nguyen_Quan: "",
      Dan_Toc: "",
      Nghe_Nghiep: "",
      Noi_Lam_Viet: "",
      So_CCCD: "",
      Ngay_Cap: "",
      Noi_Cap: "",
      Nam_DK_Thuong_Tru: "",
      Dia_Chi_DK_Thuong_Tru: "",
    };
  }
  async componentDidMount() {
    let people = this.props.peopleEdit;
    if (people && !_.isEmpty(people)) {
      this.setState({
        id: people.id,
        Ho_Ten: people.Ho_Ten,
        Nam_Sinh: people.Nam_Sinh,
        Noi_Sinh: people.Noi_Sinh,
        Nguyen_Quan: people.Nguyen_Quan,
        Dan_Toc: people.Dan_Toc,
        Nghe_Nghiep: people.Nghe_Nghiep,
        Noi_Lam_Viet: people.Noi_Lam_Viet,
        So_CCCD: people.So_CCCD,
        Ngay_Cap: people.Ngay_Cap,
        Noi_Cap: people.Noi_Cap,
        Nam_DK_Thuong_Tru: people.Nam_DK_Thuong_Tru,
        Dia_Chi_DK_Thuong_Tru: people.Dia_Chi_DK_Thuong_Tru,
      });
    }
  }
  toggle = () => {
    this.props.toggleFromParent();
  };
  handleOnChangeInput = (event, id) => {
    let copyState = { ...this.state };
    copyState[id] = event.target.value;
    this.setState({
      ...copyState,
    });
  };
  checkValidateInput = () => {
    let isValid = true;
    let arrInput = [
      "Ho_Ten",
      "Nam_Sinh",
      "Noi_Sinh",
      "Nguyen_Quan",
      "Dan_Toc",
      "Nghe_Nghiep",
      "Noi_Lam_Viet",
      "So_CCCD",
      "Ngay_Cap",
      "Noi_Cap",
      "Nam_DK_Thuong_Tru",
      "Dia_Chi_DK_Thuong_Tru",
    ];
    for (let i = 0; i < arrInput.length; i++) {
      if (!this.state[arrInput[i]]) {
        isValid = false;
        toast.warning("Missing parameter : " + arrInput[i]);
        break;
      }
    }
    return isValid;
  };
  handleSaveUser = () => {
    let isValid = this.checkValidateInput();
    if (isValid === true) {
      //call api edit user modal
      this.props.doEditPeople(this.state);
    }
  };

  render() {
    return (
      <Modal
        isOpen={this.props.isOpen}
        toggle={() => {
          this.toggle();
        }}
        size="lg"
        centered
      >
        <ModalHeader
          toggle={() => {
            this.toggle();
          }}
        >
          Sửa Nhân Khẩu
        </ModalHeader>
        <ModalBody>
          <div className="row ">
            <form className="ml-5">
              <div className="form-row">
                <div className="form-group col-md-6">
                  <label>Họ Tên</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Họ Tên"
                    onChange={(event) => {
                      this.handleOnChangeInput(event, "Ho_Ten");
                    }}
                    value={this.state.Ho_Ten}
                  />
                </div>
                <div className="form-group col-md-6">
                  <label>Năm Sinh</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Năm Sinh"
                    onChange={(event) => {
                      this.handleOnChangeInput(event, "Nam_Sinh");
                    }}
                    value={this.state.Nam_Sinh}
                  />
                </div>
              </div>
              <div className="form-row">
                <div className="form-group col-md-6">
                  <label>Nơi Sinh</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Nơi Sinh"
                    onChange={(event) => {
                      this.handleOnChangeInput(event, "Noi_Sinh");
                    }}
                    value={this.state.Noi_Sinh}
                  />
                </div>
                <div className="form-group col-md-6">
                  <label>Nguyên Quán</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Nguyên Quán"
                    onChange={(event) => {
                      this.handleOnChangeInput(event, "Nguyen_Quan");
                    }}
                    value={this.state.Nguyen_Quan}
                  />
                </div>
              </div>
              <div className="form-row">
                <div className="form-group col-md-6">
                  <label>Dân Tộc</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Dân Tộc"
                    onChange={(event) => {
                      this.handleOnChangeInput(event, "Dan_Toc");
                    }}
                    value={this.state.Dan_Toc}
                  />
                </div>
                <div className="form-group col-md-6">
                  <label>Nghề Nghiệp</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Nghề Nghiệp"
                    onChange={(event) => {
                      this.handleOnChangeInput(event, "Nghe_Nghiep");
                    }}
                    value={this.state.Nghe_Nghiep}
                  />
                </div>
              </div>
              <div className="form-row">
                <div className="form-group col-md-6">
                  <label>Nơi Làm Việt</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Nơi Làm Việt"
                    onChange={(event) => {
                      this.handleOnChangeInput(event, "Noi_Lam_Viet");
                    }}
                    value={this.state.Noi_Lam_Viet}
                  />
                </div>
                <div className="form-group col-md-6">
                  <label>Số CCCD</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Số CCCD"
                    onChange={(event) => {
                      this.handleOnChangeInput(event, "So_CCCD");
                    }}
                    value={this.state.So_CCCD}
                  />
                </div>
              </div>
              <div className="form-row">
                <div className="form-group col-md-6">
                  <label>Ngày Cấp</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Ngày Cấp"
                    onChange={(event) => {
                      this.handleOnChangeInput(event, "Ngay_Cap");
                    }}
                    value={this.state.Ngay_Cap}
                  />
                </div>
                <div className="form-group col-md-6">
                  <label>Nơi Cấp</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Nơi Cấp"
                    onChange={(event) => {
                      this.handleOnChangeInput(event, "Noi_Cap");
                    }}
                    value={this.state.Noi_Cap}
                  />
                </div>
              </div>
              <div className="form-row">
                <div className="form-group col-md-6">
                  <label>Năm ĐKT Trú</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Năm ĐKT Trú"
                    onChange={(event) => {
                      this.handleOnChangeInput(event, "Nam_DK_Thuong_Tru");
                    }}
                    value={this.state.Nam_DK_Thuong_Tru}
                  />
                </div>
                <div className="form-group col-md-6">
                  <label>Địa Chỉ ĐKT Trú</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Địa Chỉ ĐKT Trú"
                    onChange={(event) => {
                      this.handleOnChangeInput(event, "Dia_Chi_DK_Thuong_Tru");
                    }}
                    value={this.state.Dia_Chi_DK_Thuong_Tru}
                  />
                </div>
              </div>
            </form>
          </div>
        </ModalBody>
        <ModalFooter>
          <Button
            className="btn px-3"
            color="primary"
            onClick={() => {
              this.handleSaveUser();
            }}
          >
            Lưu
          </Button>
          <Button
            className="btn px-3"
            color="secondary"
            onClick={() => {
              this.toggle();
            }}
          >
            Thoát
          </Button>
        </ModalFooter>
      </Modal>
    );
  }
}

const mapStateToProps = (state) => {
  return {};
};

const mapDispatchToProps = (dispatch) => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(ModalEditPeople);
