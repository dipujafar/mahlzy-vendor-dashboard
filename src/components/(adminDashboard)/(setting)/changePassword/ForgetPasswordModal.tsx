import { Button, ConfigProvider, Form, Input, Modal } from "antd";
import { RiCloseLargeLine } from "react-icons/ri";
import VerifyEmailModal from "./VerifyEmailModal";
import { useState } from "react";

type TPropsType = {
  open: boolean;
  setOpen: (collapsed: boolean) => void;
};

const ForgetPasswordModal = ({ open, setOpen }: TPropsType) => {
  const [form] = Form.useForm();
  const [openModal, setOpenModal] = useState(false);

  // @ts-expect-error: Ignoring TypeScript error due to inferred 'any' type for 'values' which is handled in the form submit logic
  const handleSubmit = (values) => {
    console.log("Success:", values);
    setOpen(false);
    setOpenModal(true);
  };
  return (
    <>
      <Modal
        open={open}
        footer={null}
        centered={true}
        onCancel={() => setOpen(false)}
        closeIcon={false}
        style={{
          minWidth: "max-content",
        }}
      >
        <div className="py-14">
          <div
            className="w-10 h-10 bg-red-500  absolute top-2 right-2 rounded-full cursor-pointer flex justify-center items-center"
            onClick={() => setOpen(false)}
          >
            <RiCloseLargeLine size={18} color="#fff" />
          </div>

          {/* header */}
          <div>
            <h4 className=" text-2xl font-medium text-center">
              Forgot Password
            </h4>
            <p className="mt-1 text-center">
              Please enter your email address to reset your password.
            </p>
          </div>

          {/* form */}
          <ConfigProvider
            theme={{
              components: {
                Input: {
                  colorBgContainer: "#F6F6F6",
                  colorText: "#505050",
                  colorTextPlaceholder: "#505050",
                },
              },
            }}
          >
            <Form
              form={form}
              onFinish={handleSubmit}
              layout="vertical"
              style={{
                maxWidth: 500,
                marginTop: "25px",
              }}
            >
              {/*  input  email */}
              <Form.Item
                name="email"
                rules={[{ type: "email", required: true }]}
              >
                <Input
                  size="large"
                  placeholder="Enter Your Email"
                  className="!border-[#D3D3D3] !py-3"
                ></Input>
              </Form.Item>

              <Button htmlType="submit" size="large" block>
                Send OTP
              </Button>
            </Form>
          </ConfigProvider>
        </div>
      </Modal>
      <VerifyEmailModal
        open={openModal}
        setOpen={setOpenModal}
      ></VerifyEmailModal>
    </>
  );
};

export default ForgetPasswordModal;
