import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { confirmAlert } from "react-confirm-alert";
import "react-confirm-alert/src/react-confirm-alert.css";
import useAxios from "../../../hooks/useAxios";

export default function DeletePostButton({ id }) {
  const [error, setError] = useState(null);

  const http = useAxios();
  const navigate = useNavigate();

  const url = `wp-json/wp/v2/posts/${id}`;

  async function handleDelete() {
    confirmAlert({
      title: "Confirm to Submit",
      message: "Do you want to delete this post?",
      buttons: [
        {
          label: "Yes",
        },
        {
          label: "No",
        },
      ],
    });
    if (confirmAlert) {
      try {
        await http.delete(url);
        navigate("/dashboard/posts");
      } catch (error) {
        setError(error);
      }
    }
  }

  return (
    <button type="button" className="delete" onClick={handleDelete}>
      {error ? "Error" : "Delete"}
    </button>
  );
}
