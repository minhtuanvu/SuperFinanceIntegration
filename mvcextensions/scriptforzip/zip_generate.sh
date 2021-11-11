#!/bin/bash

usage() {
   echo "please provide Application Type (OLB/Mobile) and Version"
}

# Check we have two arguments

if [[ ${#} -lt 2 ]]; then
   usage
   exit 1
fi

export REPO_NATIVE="konymobilebanking"
export REPO_OLB="konyonlinebanking"
export APPLICATION_TYPE="${1}"
export APPLICATION_VERSION="${2}"



cd ../..
export CURR_WORKING_DIR=`pwd`
export LOG_PATH="${CURR_WORKING_DIR}/zip_`date +"%Y%m%d-%H%M%S"`.log"

touch "${LOG_PATH}"
chmod 777 ${LOG_PATH}


zip_dir() {

   # This function needs two arguments:
   #    => $1 is the name of the zip file to create
   #    => $2 is the directory to zip
   
   zip  -r "${1}" "${2}" >> ${LOG_PATH}
   if [[ ${?} -ne 0 ]]; then
      echo "*** Failed"
      echo "zip failed" >> ${LOG_PATH}
	  exit 1;
   else
      echo "Zip creation completed Successfully"  | tee -a ${LOG_PATH}
   exit;
   fi
}

if [[ ${APPLICATION_TYPE} == "OLB" ]]; then
   echo "Removing some unnecessary Files from the repository"  | tee -a ${LOG_PATH}
   cd ${REPO_OLB} 
   rm -rf .git*
   cd mvcextensions/
   echo "Copying the common repo folders into the mvcextensions"  | tee -a
   cp -r ../../konyretailbankingcommon/* .
   echo "Removing some unnecessary Files from the mvcextensions folder"  | tee -a ${LOG_PATH}
   rm -rf .*
   rm -rf scriptforzip
   cd ../..
   echo "	Zipping the Repository" | tee -a ${LOG_PATH}
   zip_dir "RetailBanking_Web_v${APPLICATION_VERSION}.zip" "${REPO_OLB}"

elif [[ ${APPLICATION_TYPE} == "Mobile" ]]; then
  echo "Removing some unnecessary Files from the repository"  | tee -a ${LOG_PATH}
   cd ${REPO_NATIVE} 
   rm -rf .git*
   cd mvcextensions/
   echo "Copying the common repo folders into the mvcextensions"  | tee -a
   cp -r ../../konyretailbankingcommon/* .
   echo "Removing some unnecessary Files from the mvcextensions folder"  | tee -a ${LOG_PATH}
   rm -rf .*
   rm -rf scriptforzip
   cd ../..
   echo "	Zipping the Repository" | tee -a ${LOG_PATH}
   zip_dir "RetailBanking_Mobile_v${APPLICATION_VERSION}.zip" "${REPO_NATIVE}"
fi

