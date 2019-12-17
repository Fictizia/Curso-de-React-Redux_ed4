const useFormSubmit = () => {

  const handleSubmit = (values, { setSubmitting }) => {
    setTimeout(() => {
      alert(JSON.stringify(values, null, 2));

      setSubmitting(false);
    }, 1000);
  }

  return handleSubmit;
}

export default useFormSubmit;
