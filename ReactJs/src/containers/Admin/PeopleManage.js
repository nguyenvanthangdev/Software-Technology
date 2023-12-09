import React, { Component } from "react";
import { connect } from "react-redux";
import "./PeopleManage.scss";
import {
  getAllPeoples,
  createNewPeople,
  deletePeople,
  editPeople,
} from "../../services/PeoplesService";
import ModalPeople from "./ModalPeople";
import { emitter } from "../../utils/emitter";
import ModalEditPeople from "./ModalEditPeople";
import { toast } from "react-toastify";
import CustomScrollbars from "../../components/CustomScrollbars/CustomScrollbars";

class PeopleManage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      arrPeoples: [],
      isOpenModalPeoples: false,
      isOpenModaEditlPeoples: false,
      peopleEdit: {},
      searchCCCD: "",
    };
  }

  async componentDidMount() {
    await this.getAllPeoplesFromReact();
  }

  handleAddNewPeople = () => {
    this.setState({
      isOpenModalPeoples: true,
    });
  };

  togglePeopleModal = () => {
    this.setState({
      isOpenModalPeoples: !this.state.isOpenModalPeoples,
    });
  };
  toggleUserEditModal = () => {
    this.setState({
      isOpenModaEditlPeoples: !this.state.isOpenModaEditlPeoples,
    });
  };
  getAllPeoplesFromReact = async () => {
    let response = await getAllPeoples("ALL");
    if (response && response.errCode === 0) {
      this.setState({
        arrPeoples: response.peoples,
      });
    } else {
      toast.error("Failed !");
    }
  };
  createNewAPeople = async (data) => {
    try {
      let response = await createNewPeople(data);
      if (response && response.errCode !== 0) {
        toast.error(response.errMessage);
      } else {
        await this.getAllPeoplesFromReact();
        toast.success("Create Success !");
        this.setState({
          isOpenModalPeoples: false,
        });
        emitter.emit("EVENT_CLEAR_MODAL_DATA");
      }
    } catch (e) {
      console.log(e);
      toast.error("Failed !");
    }
  };
  handleDeletePeople = async (data) => {
    try {
      let res = await deletePeople(data.id);
      if (res && res.errCode === 0) {
        await this.getAllPeoplesFromReact();
        toast.success("Delete Success !");
      } else {
        toast.error(res.errMessage);
        console.log(res);
      }
    } catch (e) {
      console.log(e);
      toast.error("Failed !");
    }
  };
  handEditPeople = (data) => {
    this.setState({
      isOpenModaEditlPeoples: true,
      peopleEdit: data,
    });
  };
  doEditPeople = async (data) => {
    try {
      let res = await editPeople(data);
      if (res && res.errCode === 0) {
        this.setState({
          isOpenModaEditlPeoples: false,
        });
        await this.getAllPeoplesFromReact();
        toast.success(res.errMessage);
      } else {
        toast.error("Failed !");
      }
    } catch (e) {
      console.log(e);
      toast.error("Failed !");
    }
  };
  handleSearchChange = (event) => {
    this.setState({
      searchCCCD: event.target.value,
    });
  };
  render() {
    let arrPeoples = this.state.arrPeoples;
    let filteredPeoples = arrPeoples.filter((item) => {
      return item.So_CCCD.includes(this.state.searchCCCD);
    });
    return (
      <div className="peoples-container">
        <ModalPeople
          isOpen={this.state.isOpenModalPeoples}
          toggleFromParent={this.togglePeopleModal}
          createNewAPeople={this.createNewAPeople}
        />
        {this.state.isOpenModaEditlPeoples && (
          <ModalEditPeople
            isOpen={this.state.isOpenModaEditlPeoples}
            toggleFromParent={this.toggleUserEditModal}
            peopleEdit={this.state.peopleEdit}
            doEditPeople={this.doEditPeople}
          />
        )}
        <div className="title text-center my-5">Quản Lý Nhân Khẩu</div>
        <div className="mx-1">
          <button
            className="btn btn-primary px-3 mx-5"
            onClick={() => this.handleAddNewPeople()}
          >
            <i className="fas fa-plus"></i>Thêm Mới
          </button>
          <div className="d-flex">
            <input
              className="form-control me-2 my-1"
              type="search"
              placeholder="Tìm Kiếm CCCD"
              value={this.state.searchCCCD}
              onChange={this.handleSearchChange}
            />
            <button
              className="btn btn-outline-success custom-btn"
              type="submit"
            >
              Tìm Kiếm
            </button>
          </div>
        </div>
        <div className="peoples-table">
          <CustomScrollbars>
            <table className="table px-3">
              <thead className="thead-light">
                <tr>
                  <th className="customcolumn" scope="col">
                    Họ Tên
                  </th>
                  <th className="customcolumn" scope="col">
                    Năm Sinh
                  </th>
                  <th className="customcolumn" scope="col">
                    Nơi Sinh
                  </th>
                  <th className="customcolumn" scope="col">
                    Nguyên Quán
                  </th>
                  <th className="customcolumn" scope="col">
                    Dân Tộc
                  </th>
                  <th className="customcolumn" scope="col">
                    Nghề Nghiệp
                  </th>
                  <th className="customcolumn" scope="col">
                    Nơi Làm Việt
                  </th>
                  <th className="customcolumn" scope="col">
                    Số CCCD
                  </th>
                  <th className="customcolumn" scope="col">
                    Ngày Cấp
                  </th>
                  <th className="customcolumn" scope="col">
                    Nơi Cấp
                  </th>
                  <th className="customcolumn" scope="col">
                    Năm ĐKT Trú
                  </th>
                  <th className="customcolumn" scope="col">
                    Địa Chỉ ĐKT Trú
                  </th>
                  <th className="customcolumn" scope="col">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody>
                {filteredPeoples &&
                  filteredPeoples.map((item, index) => {
                    return (
                      <tr key={index}>
                        <td className="customcolumn">{item.Ho_Ten}</td>
                        <td className="customcolumn">{item.Nam_Sinh}</td>
                        <td className="customcolumn">{item.Noi_Sinh}</td>
                        <td className="customcolumn">{item.Nguyen_Quan}</td>
                        <td className="customcolumn">{item.Dan_Toc}</td>
                        <td className="customcolumn">{item.Nghe_Nghiep}</td>
                        <td className="customcolumn">{item.Noi_Lam_Viet}</td>
                        <td className="customcolumn">{item.So_CCCD}</td>
                        <td className="customcolumn">{item.Ngay_Cap}</td>
                        <td className="customcolumn">{item.Noi_Cap}</td>
                        <td className="customcolumn">
                          {item.Nam_DK_Thuong_Tru}
                        </td>
                        <td className="customcolumn">
                          {item.Dia_Chi_DK_Thuong_Tru}
                        </td>
                        <td className="customcolumn">
                          <button
                            type="button"
                            className="btn btn-warning px-3 mx-2"
                            onClick={() => this.handEditPeople(item)}
                          >
                            Edit
                          </button>
                          <button
                            type="button"
                            className="btn btn-danger px-3"
                            onClick={() => this.handleDeletePeople(item)}
                          >
                            Delete
                          </button>
                        </td>
                      </tr>
                    );
                  })}
              </tbody>
            </table>
          </CustomScrollbars>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {};
};

const mapDispatchToProps = (dispatch) => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(PeopleManage);
