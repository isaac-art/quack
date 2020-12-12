(ql:quickload "clack")
(ql:quickload "ningle")


(defvar *app* (make-instance 'ningle:app))

(setf (ningle:route *app* "/")
      "Welcome!")

(setf (ningle:route *app* "/login" :method :POST)
      #'(lambda (params)
          (if (authorize (cdr (assoc "username" params :test #'string=))
                         (cdr (assoc "password" params :test #'string=)))
              "Authorized!"
              "Failed...Try again.")))

(clack:clackup *app*)

(clack:stop *app*)
