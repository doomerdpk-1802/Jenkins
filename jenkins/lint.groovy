stage('Lint') {
  steps {
    sh '''
      echo "Running ESLint..."
      yarn lint
    '''
  }
}
